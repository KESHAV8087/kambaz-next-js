export default function ResponsiveBreakpointColor() {
  return (
    <div id="wd-tw-breakpoint-color">
      <h3>Responsive: breakpoint color</h3>
      <div className="p-4 text-white bg-red-500 md:bg-green-500 lg:bg-blue-500">
        red on mobile, green at md, blue at lg
      </div>
    </div>
  );
}
