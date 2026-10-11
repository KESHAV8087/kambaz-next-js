export default function CssLayout() {
  return (
    <div id="wd-css-positions">
      <h3>Position, float, flex, and media queries</h3>

      <h4>Position: relative</h4>
      <div className="wd-relative">relative (nudged down and right)</div>

      <h4>Position: absolute</h4>
      <div className="wd-abs-parent">
        relative parent
        <div className="wd-abs-child">absolute child</div>
      </div>

      <h4>Position: fixed</h4>
      <div className="wd-fixed">fixed box (stays on screen)</div>

      <h4>z-index</h4>
      <div>
        <div className="wd-z-base">z-index 1</div>
        <div className="wd-z-top">z-index 10</div>
      </div>

      <h4>Float</h4>
      <div>
        <div className="wd-float-left">float left</div>
        <p>Text wraps around the floated box to its left.</p>
        <div className="wd-float-clear" />
      </div>

      <h4>Flex</h4>
      <div className="wd-flex">
        <div>flex 1</div>
        <div>flex 2</div>
        <div>flex 3</div>
      </div>

      <h4>Grid</h4>
      <div className="wd-grid">
        <div>1</div><div>2</div><div>3</div>
        <div>4</div><div>5</div><div>6</div>
      </div>

      <h4>Media query</h4>
      <div className="wd-media">Tomato on narrow screens, seagreen at 768px and up.</div>
    </div>
  );
}
