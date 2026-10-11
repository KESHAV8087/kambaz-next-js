import BackgroundColors from "./BackgroundColors";

export default function CssBoxModel() {
  return (
    <div id="wd-css-colors">
      <h3>Color, border, and box model</h3>

      <h4>Color</h4>
      <p className="wd-color">Text in crimson.</p>

      <BackgroundColors />

      <h4>Border</h4>
      <div className="wd-border">bordered box</div>

      <h4>Padding</h4>
      <div className="wd-padding">padded box</div>

      <h4>Margin</h4>
      <div className="wd-margin">box with margin</div>

      <h4>Box model</h4>
      {/* nested layers: gray parent = margin, red border, light-blue padding, green content */}
      <div className="wd-bm-parent">
        <div className="wd-bm-box">
          <div className="wd-bm-content" />
        </div>
      </div>
      {/* box-sizing pair */}
      <div className="wd-content-box">content-box 200x180</div>
      <div className="wd-border-box">border-box 200x180</div>

      <h4>Corner</h4>
      <div className="wd-corner">rounded corners</div>

      <h4>Dimension</h4>
      <div className="wd-dimension">fixed width and height</div>

      <h4>Display</h4>
      <span className="wd-display-inline">inline</span>
      <span className="wd-display-block">block</span>
    </div>
  );
}
