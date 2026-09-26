export default function RadioButtons() {
  return (
    <div id="wd-radio-buttons">
      <h4>Radio Buttons</h4>
      <label><input id="wd-radio-comedy" type="radio" name="genre" value="comedy" defaultChecked /> Comedy</label><br />
      <label><input type="radio" name="genre" value="drama" /> Drama</label><br />
      <label><input type="radio" name="genre" value="action" /> Action</label>
    </div>
  );
}
