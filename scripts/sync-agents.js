/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const SPECS_DIR = path.resolve(__dirname, '../ai/specs');
const COPILOT_DIR = path.resolve(__dirname, '../.github/agents');
const GEMINI_DIR = path.resolve(__dirname, '../.gemini/agents');
const ANTIGRAVITY_SKILLS_DIR = path.resolve(__dirname, '../ai/skills');
const ANTIGRAVITY_AGENTS_DIR = path.resolve(__dirname, '../ai/agents');
const ANTIGRAVITY_WORKFLOWS_DIR = path.resolve(__dirname, '../ai/workflows');
const AGENTS_MD_PATH = path.resolve(__dirname, '../AGENTS.md');

// Generated file banner — points editors back to the canonical spec
function doNotEditBanner(specFile) {
  return `<!-- AUTO-GENERATED from ai/specs/${specFile} — do not edit directly. Run \`npm run sync-agents\` to regenerate. -->

`;
}

// Ensure directories exist
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Simple YAML Parser
function parseYAML(yamlText) {
  const lines = yamlText.split(/\r?\n/);
  const result = {};
  let currentKey = null;
  let currentObject = null;

  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // Detect list item
    if (trimmed.startsWith('-')) {
      const rest = trimmed.slice(1).trim();
      if (rest.includes(':')) {
        currentObject = {};
        if (!result[currentKey]) result[currentKey] = [];
        result[currentKey].push(currentObject);

        const colonIdx = rest.indexOf(':');
        const k = rest.slice(0, colonIdx).trim();
        const v = rest.slice(colonIdx + 1).trim().replace(/^['"]|['"]$/g, '');
        currentObject[k] = v === 'true' ? true : v === 'false' ? false : v;
      } else {
        if (!result[currentKey]) result[currentKey] = [];
        result[currentKey].push(rest.replace(/^['"]|['"]$/g, ''));
      }
      continue;
    }

    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      const val = line.slice(colonIdx + 1).trim();

      const leadingSpaces = line.length - line.trimStart().length;
      if (leadingSpaces >= 4 && currentObject) {
        currentObject[key] = val.replace(/^['"]|['"]$/g, '') === 'true' ? true : val.replace(/^['"]|['"]$/g, '') === 'false' ? false : val.replace(/^['"]|['"]$/g, '');
      } else {
        currentObject = null;
        currentKey = key;
        if (val === '') {
          result[key] = null;
        } else {
          result[key] = val.replace(/^['"]|['"]$/g, '');
        }
      }
    }
  }
  return result;
}

function parseFrontmatter(fileContent) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);
  if (!match) {
    return { frontmatter: {}, content: fileContent };
  }
  return {
    frontmatter: parseYAML(match[1]),
    content: match[2].trim()
  };
}

// Simple YAML Serializer
function toYAML(obj) {
  let yaml = '---\n';
  for (const [key, val] of Object.entries(obj)) {
    if (val === null || val === undefined) continue;
    if (Array.isArray(val)) {
      yaml += `${key}:\n`;
      for (const item of val) {
        if (typeof item === 'object') {
          const entries = Object.entries(item);
          for (let i = 0; i < entries.length; i++) {
            const [k, v] = entries[i];
            const prefix = i === 0 ? '  - ' : '    ';
            const valueStr = typeof v === 'string' ? (v.includes('\n') || v.length > 40 ? `|\n      ${v.replace(/\n/g, '\n      ')}` : `"${v.replace(/"/g, '\\"')}"`) : v;
            yaml += `${prefix}${k}: ${valueStr}\n`;
          }
        } else {
          yaml += `  - "${item.replace(/"/g, '\\"')}"\n`;
        }
      }
    } else {
      yaml += `${key}: "${val.replace(/"/g, '\\"')}"\n`;
    }
  }
  yaml += '---\n';
  return yaml;
}

// Main execution
function main() {
  console.log('🔄 Starting Agent & Skill Specification Synchronization...');
  
  if (!fs.existsSync(SPECS_DIR)) {
    console.error(`❌ Source directory ${SPECS_DIR} does not exist!`);
    process.exit(1);
  }

  ensureDir(COPILOT_DIR);
  ensureDir(GEMINI_DIR);
  ensureDir(ANTIGRAVITY_SKILLS_DIR);
  ensureDir(ANTIGRAVITY_AGENTS_DIR);
  ensureDir(ANTIGRAVITY_WORKFLOWS_DIR);

  const files = fs.readdirSync(SPECS_DIR).filter(f => f.endsWith('.md'));
  
  const allAgents = [];

  for (const file of files) {
    const filePath = path.join(SPECS_DIR, file);
    const rawContent = fs.readFileSync(filePath, 'utf8');
    const { frontmatter, content } = parseFrontmatter(rawContent);
    const basename = path.basename(file, '.md');
    const snakeCaseName = basename.replace(/-/g, '_').toLowerCase();

    console.log(`\n📄 Processing: ${file} (Type: ${frontmatter.type || 'unknown'})`);

    if (!frontmatter.type) {
      console.warn(`⚠️ Warning: No type specified for ${file}. Skipping.`);
      continue;
    }

    // Keep list for compiling AGENTS.md
    if (frontmatter.type !== 'workflow') {
      allAgents.push({
        name: frontmatter.name || basename,
        description: frontmatter.description,
        type: frontmatter.type,
      });
    }

    const banner = doNotEditBanner(file);

    // 1. GitHub Copilot Custom Agent (.github/agents/*.agent.md)
    if (frontmatter.type !== 'workflow') {
      const copilotFrontmatter = { ...frontmatter };
      delete copilotFrontmatter.type;
      delete copilotFrontmatter.globs;
      
      const copilotContent = banner + toYAML(copilotFrontmatter) + '\n' + content;
      const copilotPath = path.join(COPILOT_DIR, `${basename}.agent.md`);
      fs.writeFileSync(copilotPath, copilotContent, 'utf8');
      console.log(`  ✅ Generated Copilot Agent: ${path.basename(copilotPath)}`);
    }

    // 2. Cursor Rule generation removed.
    // 3. Claude Code generation removed.

    // 4. Gemini CLI (.gemini/agents/*.md)
    if (frontmatter.type !== 'workflow') {
      const geminiName = basename; // already kebab-case
      const geminiFrontmatter = {
        name: geminiName,
        description: frontmatter.description,
      };
      if (Array.isArray(frontmatter.tools) && frontmatter.tools.length > 0) {
        geminiFrontmatter.tools = frontmatter.tools;
      }
      const geminiContent = banner + toYAML(geminiFrontmatter) + '\n' + content;
      const geminiPath = path.join(GEMINI_DIR, `${basename}.md`);
      fs.writeFileSync(geminiPath, geminiContent, 'utf8');
      console.log(`  ✅ Generated Gemini CLI Agent: ${path.basename(geminiPath)}`);
    }

    // 5. Antigravity Skill/Agent/Workflow
    if (frontmatter.type === 'skill') {
      const skillDir = path.join(ANTIGRAVITY_SKILLS_DIR, snakeCaseName);
      ensureDir(skillDir);
      
      const skillFrontmatter = {
        name: frontmatter.name,
        description: frontmatter.description
      };
      const skillContent = banner + toYAML(skillFrontmatter) + '\n' + content;
      const skillPath = path.join(skillDir, 'SKILL.md');
      fs.writeFileSync(skillPath, skillContent, 'utf8');
      console.log(`  ✅ Generated Antigravity Skill: ${snakeCaseName}/SKILL.md`);
    } else if (frontmatter.type === 'agent') {
      const agentDir = path.join(ANTIGRAVITY_AGENTS_DIR, snakeCaseName);
      ensureDir(agentDir);

      const agentFrontmatter = {
        name: frontmatter.name,
        description: frontmatter.description
      };
      const agentContent = banner + toYAML(agentFrontmatter) + '\n' + content;
      const agentPath = path.join(agentDir, 'AGENT.md');
      fs.writeFileSync(agentPath, agentContent, 'utf8');
      console.log(`  ✅ Generated Antigravity Agent: ${snakeCaseName}/AGENT.md`);
    } else if (frontmatter.type === 'workflow') {
      const workflowFrontmatter = {
        description: frontmatter.description
      };
      const workflowContent = banner + toYAML(workflowFrontmatter) + '\n' + content;
      const workflowPath = path.join(ANTIGRAVITY_WORKFLOWS_DIR, `${snakeCaseName}.md`);
      fs.writeFileSync(workflowPath, workflowContent, 'utf8');
      console.log(`  ✅ Generated Antigravity Workflow: ${snakeCaseName}.md`);
    }
  }

  // 6. Update root AGENTS.md (for Claude / Global context)
  updateAgentsMd(allAgents);
  
  console.log('\n✨ Synchronization complete!');
}

function updateAgentsMd(agents) {
  if (!fs.existsSync(AGENTS_MD_PATH)) return;
  
  console.log(`\n📝 Updating root AGENTS.md...`);
  let content = fs.readFileSync(AGENTS_MD_PATH, 'utf8');
  
  const startMarker = '### Stage 1: Development & Data Gathering (Parallel)';
  const endMarker = 'All coordination is managed by the';
  
  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);
  
  if (startIndex !== -1 && endIndex !== -1) {
    // We categorize them into Stage 1 and Stage 2
    const stage1List = [
      'Senior Frontend Engineer',
      'Senior QA Engineer',
      'LLM Researcher',
      'Browser Researcher'
    ];
    const stage2List = [
      'Mythology Editor',
      'Code Reviewer',
      'Product Designer'
    ];

    let newBlock = `### Stage 1: Development & Data Gathering (Parallel)\n`;
    for (const name of stage1List) {
      const agent = agents.find(a => a.name === name);
      if (agent) {
        newBlock += `- **${agent.name}**: ${agent.description}\n`;
      }
    }
    
    newBlock += `\n### Stage 2: Quality Control & Validation (Parallel)\n`;
    for (const name of stage2List) {
      const agent = agents.find(a => a.name === name);
      if (agent) {
        newBlock += `- **${agent.name}**: ${agent.description}\n`;
      }
    }
    
    newBlock += `\n### Stage 3: Post-Review Fixes (Iterative)\n- **Senior Frontend Engineer & QA**: Addresses technical/UX feedback and updates tests.\n- **Mythology Editor & Researchers**: Resolves content inconsistencies and ensures full verification.\n\n`;
    
    content = content.slice(0, startIndex) + newBlock + content.slice(endIndex);
    fs.writeFileSync(AGENTS_MD_PATH, content, 'utf8');
    console.log(`  ✅ Root AGENTS.md updated successfully.`);
  } else {
    console.warn(`⚠️ Warning: Could not locate orchestrated pipeline placeholders in AGENTS.md.`);
  }
}

main();
