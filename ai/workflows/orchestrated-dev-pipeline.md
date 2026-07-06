---
name: Orchestrated Development & Research Pipeline
type: workflow
description: Orchestrates the execution model and stages for features and mythological content in Baltic Gods.
---

# Orchestrated Development & Research Pipeline

This workflow outlines the multi-stage development and content research process for the "Baltic Gods" project, coordinated by the **Orchestrator** agent.

## Execution Model

The pipeline consists of three stages, where tasks within Stage 1 and Stage 2 run in parallel to maximize efficiency while maintaining strict quality gates.

---

### Stage 1: Development & Data Gathering (Parallel)

In this stage, the implementation and mythology research tasks are performed concurrently:

- **Senior Frontend Engineer (Dev)**:
  - Implements the requested features, components, or UI adjustments.
  - Follows Next.js and React best practices.
  - Ensures absolute type safety and clean architecture.
  
- **Senior QA Engineer (QA)**:
  - Writes automated tests (unit, integration, or E2E) for the implementation.
  - Ensures no regressions are introduced and verifies edge cases.
  
- **Research Orchestrator (Mythology)**:
  - Initiates the [Parallel Deity Research Workflow](file:///c:/Users/ITWORK/source/repos/baltic-gods/ai/workflows/parallel_research_workflow.md).
  - Spawns and manages 5 subagents (2 Lithuanian browser crawlers, 2 Latvian browser crawlers, and 1 LLM internal researcher).
  - Fact-checks reports, compiles inconsistencies, validates academic references, and outputs the final metadata and MDX entries.

---

### Stage 2: Quality Control & Validation (Parallel)

Once Stage 1 tasks are verified as complete, the Orchestrator initiates reviews:

- **Code Reviewer**:
  - Performs a technical audit of the code and configuration changes.
  - Focuses on efficiency, performance, bundle size, and strict type safety.
  - Ensures compliance with project standards.
  
- **Product Designer**:
  - Reviews the UX/UI implementation for aesthetics and responsive layout.
  - Audits accessibility (a11y) to ensure WCAG color contrast, ARIA tags, and keyboard navigability are satisfied.

---

### Stage 3: Post-Review Fixes (Iterative)

In this stage, feedback or issues highlighted in Stage 2 are resolved:

- **Frontend Engineer**: Addresses code efficiency, styling, or UX/UI issues.
- **QA Engineer**: Updates tests to cover modified logic or edge cases.
- **Research Orchestrator**: Resolves any lingering mythological content or localization discrepancies.

---

## Dependency Resolution

1. The **Orchestrator** initiates Stage 1. The Frontend Engineer, QA, and Research Orchestrator work independently.
2. The **Research Orchestrator** is responsible for managing its fanned-out subagents and producing a finalized, reference-backed content record by the end of Stage 1.
3. Once all Stage 1 tasks have successfully completed, the **Orchestrator** triggers Stage 2 audits.
4. If the Code Reviewer or Product Designer flags issues, the pipeline returns to Stage 3 for targeted adjustments before a final build and verification.
