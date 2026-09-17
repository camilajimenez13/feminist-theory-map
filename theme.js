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
  background:       "#1E1926",  // deep plum-black background
  backgroundPanel:   "#26202F",  // side panel, slightly lighter
  text:              "#EFE9F5",  // near-white with a lilac tint
  textDim:           "#B4A8C7",  // muted lilac-grey for secondary text
  line:              "#3E3450",  // connecting lines, dividers

  accent:            "#B08BD9",  // lilac — center node + active node + hover link color
  accentDim:         "#7A5A9E",  // deeper lilac, reserved use

  branch:            "#5C4E73",  // default topic node color (muted lilac-grey)
  branchHover:       "#9B7FC7",  // lighter lilac on hover
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
