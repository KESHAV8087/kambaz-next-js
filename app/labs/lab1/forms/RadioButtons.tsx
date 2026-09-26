export default function RadioButtons() {
  return (
    <div id="wd-radio-buttons">
      <h4>Radio Buttons</h4>
      <label><input type="radio" name="genre" value="rock" defaultChecked /> Rock</label><br />
      <label><input type="radio" name="genre" value="pop" /> Pop</label><br />
      <label><input type="radio" name="genre" value="jazz" /> Jazz</label>
    </div>
  );
}
