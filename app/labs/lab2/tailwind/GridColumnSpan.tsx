export default function GridColumnSpan() {
  return (
    <div id="wd-tw-grid-span">
      <h3>Grid whose columns span</h3>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-2 bg-cyan-300 p-3">col-span-2</div>
        <div className="bg-cyan-400 p-3">1</div>
        <div className="bg-cyan-400 p-3">1</div>
        <div className="col-span-4 bg-cyan-500 text-white p-3">col-span-4 (full row)</div>
        <div className="col-span-3 bg-cyan-400 p-3">col-span-3</div>
        <div className="bg-cyan-300 p-3">1</div>
      </div>
    </div>
  );
}
