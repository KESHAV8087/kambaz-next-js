export default function CssLayout() {
  return (
    <div id="wd-css-layout">
      <h3>Position, z-index, float, grid, flex, media query</h3>

      <h4>Position + z-index</h4>
      <div className="wd-relative">position: relative (nudged)</div>
      <div className="wd-absolute-parent">
        <div className="wd-absolute-child">absolute, z-index 5</div>
        relative parent
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
