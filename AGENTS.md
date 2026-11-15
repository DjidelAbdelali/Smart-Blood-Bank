# Repository Engineering Guidelines (Claude 32 Suite)

This repository follows the engineering standards distilled from the 32 essential AI development repositories:

## 1. Andrej Karpathy Engineering Principles
- **Think Before Coding**: Understand the root cause before editing. Formulate a hypothesis and minimal change set.
- **Simplicity First**: Write readable, direct code. Avoid premature abstractions.
- **Surgical Changes**: Restrict diffs strictly to the goal. Do not reformat unrelated code or delete valid comments.
- **Goal-Driven Execution**: Verify every change with a passing build, type-check, and runtime test.

## 2. Ponytail Pragmatism
- Keep code minimal. The best line of code is the one you never had to write.
- Always check if built-in browser/standard APIs can solve the issue before adding dependencies.
- Remove dead code and unused assets immediately.

## 3. UI/UX Pro Max & Taste
- Adhere to an 8px grid system with generous card padding and clear typographic hierarchy.
- Micro-interactions must be fast and fluid (180ms–280ms) using hardware-accelerated spring curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
- Eliminate generic "AI slop" (no neon purple gradients, no floating glossy blobs, no emoji button labels).

## 4. Context7 Accurate APIs
- Check real version-specific documentation using Context7 (`npx --yes ctx7 search "<query>"`) when integrating modern libraries.

## 5. Repomix Codebase Packaging
- Use `repomix --style markdown` to pack repository state for holistic AI reasoning and review.
