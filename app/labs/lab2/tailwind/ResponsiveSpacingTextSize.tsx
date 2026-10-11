export default function ResponsiveSpacingTextSize() {
  return (
    <div id="wd-tw-spacing-text">
      <h3>Responsive: spacing and text size</h3>
      <div className="p-2 text-sm md:p-6 md:text-lg lg:p-10 lg:text-2xl bg-lime-200">
        padding and text size grow at each breakpoint
      </div>
    </div>
  );
}
