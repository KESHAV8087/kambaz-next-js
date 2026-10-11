export default function CssBoxModel() {
  return (
    <div id="wd-css-colors">
      <h3>Color, border, and box model</h3>

      <h4>Color</h4>
      <p className="wd-color">Text in crimson.</p>

      <h4>Background colors</h4>
      <div className="wd-bg-red">red</div>
      <div className="wd-bg-green">green</div>
      <div className="wd-bg-blue">blue</div>
      <div className="wd-bg-orange">orange</div>
      <div className="wd-bg-purple">purple</div>

      <h4>Border</h4>
      <div className="wd-border">bordered box</div>

      <h4>Padding</h4>
      <div className="wd-padding">padded box</div>

      <h4>Margin</h4>
      <div className="wd-margin">box with margin</div>

      <h4>Box model</h4>
      <div className="wd-box-model">content + padding + border + margin</div>

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
