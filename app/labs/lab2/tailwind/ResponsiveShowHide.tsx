export default function ResponsiveShowHide() {
  return (
    <div id="wd-tw-show-hide">
      <h3>Responsive: show / hide</h3>
      <div className="block md:hidden bg-purple-300 p-3">Visible on mobile, hidden at md+</div>
      <div className="hidden md:block bg-teal-300 p-3">Hidden on mobile, visible at md+</div>
    </div>
  );
}
