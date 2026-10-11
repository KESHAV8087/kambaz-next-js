export default function CssBoxModel() {
  return (
    <div id="wd-css-box-model">
      <h3>Color, border, and box model</h3>
      <div className="wd-bg-color wd-fg-color wd-padding wd-corner wd-dimension">
        background + color + padding + corner + dimension
      </div>
      <div className="wd-border wd-margin wd-padding">border + margin + padding</div>
      <div className="wd-box">A box-model sample (border, padding, margin, radius, width).</div>
      <span className="wd-display-block wd-bg-color wd-fg-color wd-padding">
        display: block span
      </span>
    </div>
  );
}
