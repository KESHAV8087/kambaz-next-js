export default function CssSelectors() {
  return (
    <div id="wd-css-selectors">
      <h3>Selectors</h3>
      {/* style attribute */}
      <p style={{ color: "purple" }}>Styled with the style attribute (purple).</p>
      {/* id selector */}
      <p id="wd-id-selector">Styled by an id selector (red).</p>
      {/* class selector */}
      <p className="wd-class-selector">Styled by a class selector (green, bold).</p>
      {/* document-structure selector */}
      <div className="wd-structure">
        <p>Styled by a descendant selector (blue).</p>
      </div>
    </div>
  );
}
