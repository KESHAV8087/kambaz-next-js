export default function Dropdowns() {
  return (
    <div id="wd-dropdowns">
      <h4>Dropdowns</h4>
      <label htmlFor="wd-select-one-genre">Favorite genre</label><br />
      <select id="wd-select-one-genre" defaultValue="comedy">
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="action">Action</option>
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
