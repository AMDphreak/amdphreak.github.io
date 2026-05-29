# 2026-05-28 - UI/UX Demos and Code Example Lenses

## Summary

Added a **UI/UX Demos** section to the portfolio — an index of interactive interface experiments, linked from the homepage header and Connections sidebar.

## Changes

- **Demo index** at `/gui-demos` listing UI/UX prototypes with status badges.
- **Code Example Lenses demo** at `/gui-demos/code-example-lenses` — essay on pedagogical naming conventions (didactic, schematic, contextual, role-labeled) plus a live `MultiLensCodeBlock` SolidJS component with lens switching and diff highlighting.
- **Registry** in `src/lib/gui-demos.ts` for adding future demos.
- **Homepage links** updated to point at the new section.

## Technical notes

- Demo components live under `src/components/demos/`.
- Lens token data and syntax classes are in `src/lib/code-lenses.ts`.
- No external syntax-highlighter dependency; tokens are hand-mapped for the Zig prototype.
