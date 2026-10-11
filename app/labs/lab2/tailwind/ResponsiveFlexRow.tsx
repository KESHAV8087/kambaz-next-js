export default function ResponsiveFlexRow() {
  return (
    <div id="wd-tw-flex-row">
      <h3>Responsive: flex column to row</h3>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="bg-indigo-300 p-3 flex-1">A</div>
        <div className="bg-indigo-400 p-3 flex-1">B</div>
        <div className="bg-indigo-500 text-white p-3 flex-1">C</div>
      </div>
    </div>
  );
}
