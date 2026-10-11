export default function ResponsiveGridColumns() {
  return (
    <div id="wd-tw-grid-columns">
      <h3>Responsive: grid columns</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="bg-rose-200 p-3">1</div>
        <div className="bg-rose-300 p-3">2</div>
        <div className="bg-rose-400 p-3">3</div>
        <div className="bg-rose-500 text-white p-3">4</div>
      </div>
    </div>
  );
}
