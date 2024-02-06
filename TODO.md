# Work in Progress

- Convert the various menu components as `<xin-menu>`, `<xin-menu-item>`, `<xin-menu-divider>`
- `<xin-filter>`
  - Leverage `<xin-select>` for picking fields etc.
  - Leverage `<xin-tag-list>` for displaying filters compactly
  - Leverage `popFloat` for disclosing filter-editor
- `<xin-editable>`
  - Add support for disabling / enabling options
  - Hide lock icons while resizing
  - Maybe show lines under locks indicating the parent
  - Support snapping to sibling boundaries and centers
- builds
  - better leveraging of tree-shacking?
  - pass xinjs thru?
  - or do we need to import xinjs components through xinjs to avoid dynamic import issues?
  <!--{"pin": "bottom"}-->
