# Orchestrated Development & Research Pipeline

This workflow outlines the two-stage execution process for the "Baltic Gods" project, coordinated by the **Orchestrator** agent.

## Execution Model

The pipeline consists of two distinct stages, where agents within each stage run in parallel to ensure efficiency and thoroughness.

### Stage 1: Development & Data Gathering (Parallel)

In this stage, the primary implementation and research tasks are performed.

- **Senior Frontend Engineer (Dev)**:
  - Implements the requested feature or modification.
  - Follows Next.js and React best practices.
  - Ensures type safety and architectural integrity.
- **Senior QA Engineer (QA)**:
  - Writes automated tests (unit, integration, or E2E) for the feature.
  - Ensures no regressions are introduced.
- **LLM Researcher (Mythology)**:
  - Provides initial mythology research based on internal knowledge.
  - Flags potential hallucinations and uncertainties.
- **Browser Researcher (Mythology)**:
  - Performs web-based research to find primary and secondary sources.
  - Gathers academic references and visual evidence.

### Stage 2: Quality Control & Validation (Parallel)

Once Stage 1 is complete, this stage performs a comprehensive review of the work.

- **Mythology Editor**:
  - Compares reports from the LLM and Browser researchers.
  - Identifies and flags inconsistencies.
  - Synthesizes a finalized, verified mythological record.
- **Code Reviewer**:
  - Performs a technical audit of the implementation.
  - Focuses on efficiency, performance, and code quality.
  - Ensures adherence to project standards.
- **Product Designer**:
  - Reviews the UI/UX implementation.
  - Assesses the aesthetic quality and usability.
  - Ensures a high-quality user experience.

### Stage 3: Post-Review Fixes (Iterative)

In this stage, any issues or suggestions identified in Stage 2 are addressed.

- **Frontend Engineer**: Addresses code efficiency, performance, or UI/UX feedback.
- **QA Engineer**: Updates tests to cover new scenarios or verify fixes.
- **Mythology Editor & Researchers**: Resolve any remaining data inconsistencies or lack of verification.

## Dependency Resolution

1.  The **Orchestrator** monitors the completion of all Stage 1 tasks.
2.  If any Stage 1 task fails or requires clarification, the **Orchestrator** facilitates the necessary feedback loop.
3.  Once Stage 1 is verified as complete, the **Orchestrator** triggers Stage 2 tasks.
4.  Feedback from Stage 2 agents may require returning to Stage 3 for targeted fixes or additional research.
5.  Stage 3 is iterative and may involve multiple rounds of fixes and re-verification by the reviewers.

## Completion Criteria

The workflow is considered complete when:
1.  The feature is implemented and tested.
2.  The mythological data is verified and synthesized.
3.  The technical and design reviews are passed.
4.  The **Orchestrator** generates a final synthesis of the entire process.
