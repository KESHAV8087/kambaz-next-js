export default function OtherInputTypes() {
  return (
    <div id="wd-other-input-types">
      <h4>Other Input Types</h4>
      <label htmlFor="wd-date">Date</label>{" "}
      <input id="wd-date" type="date" /><br />
      <label htmlFor="wd-color">Color</label>{" "}
      <input id="wd-color" type="color" /><br />
      <label htmlFor="wd-range">Range</label>{" "}
      <input id="wd-range" type="range" min={0} max={100} /><br />
      <label htmlFor="wd-email">Email</label>{" "}
      <input id="wd-email" type="email" placeholder="you@example.com" /><br />
      <label htmlFor="wd-number">Number</label>{" "}
      <input id="wd-number" type="number" defaultValue={0} />
    </div>
  );
}
