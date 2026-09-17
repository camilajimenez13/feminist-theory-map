/* ==========================================================================
   THEME FILE — edit this to change colors, fonts, and sizing.
   This is the ONLY file you need to touch to restyle the site.
   index.html reads this automatically.

   HOW TO EDIT COLORS
   -------------------
   Colors are hex codes like "#15130F". You can:
   - Type your own hex code (google "hex color picker" for a tool)
   - Use a named CSS color instead, e.g. "midnightblue" or "crimson"

   HOW TO EDIT FONTS
   -----------------
   "serifFont" and "sansFont" are font-family lists — the browser tries
   each one in order until it finds one installed on the visitor's device.
   To use a Google Font instead of a system font:
     1. Go to fonts.google.com, pick a font, click "Get font" → "Get embed code"
     2. Copy the <link> tag it gives you and paste it into index.html,
        just above the line that says <script src="https://cdnjs...d3...">
     3. Set serifFont or sansFont below to that font's name, e.g. "'Lora', serif"
   ========================================================================== */

const THEME = {

  // ---- Colors ----
  colors: {
    background:       "#15130F",  // page background
    backgroundPanel:   "#1C1A15",  // side panel background
    text:              "#EDE7DA",  // main text color
    textDim:           "#A9A392",  // secondary/muted text (descriptions, meta info)
    line:              "#3A362C",  // connecting lines between nodes, dividers, borders

    accent:            "#B23A4E",  // center node + active/selected node + hover link color
    accentDim:         "#6E2A34",  // reserved for darker accent use

    branch:            "#4A5443",  // default color of the outer topic nodes
    branchHover:       "#7C8A70",  // color when hovering a topic node
  },

  // ---- Typography ----
  fonts: {
    serifFont: "Georgia, 'Source Serif 4', 'Iowan Old Style', serif",   // used for: page title, node labels, panel titles
    sansFont:  "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif", // used for: descriptions, resource list, footer
  },

  // ---- Sizing ----
  sizing: {
    titleSize:        "1.5rem",   // top-left page heading
    nodeLabelSize:     "13px",    // text under each branch node
    centerLabelSize:   "16px",    // text under the center node
    panelWidth:        "380px",   // width of the side panel that slides in
    centerNodeRadius:   34,       // size (in pixels) of the center circle
    branchNodeMinRadius: 14,      // smallest a branch node can be (zero resources)
    branchNodeGrowth:    1.6,     // how much bigger a node gets per resource (capped)
  }
};
