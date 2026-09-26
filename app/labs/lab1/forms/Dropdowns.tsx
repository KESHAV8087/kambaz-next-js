export default function Dropdowns() {
  return (
    <div id="wd-dropdowns">
      <h4>Dropdowns</h4>
      <label htmlFor="wd-select-one">Favorite fruit</label><br />
      <select id="wd-select-one" defaultValue="apple">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
      </select>
      <h5>Multiple select</h5>
      <select id="wd-select-many" multiple>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}
