export default function Checkboxes() {
  return (
    <div id="wd-check-boxes">
      <h4>Checkboxes</h4>
      <label><input type="checkbox" name="topping" value="cheese" defaultChecked /> Cheese</label><br />
      <label><input type="checkbox" name="topping" value="mushrooms" /> Mushrooms</label><br />
      <label><input type="checkbox" name="topping" value="olives" /> Olives</label>
    </div>
  );
}
