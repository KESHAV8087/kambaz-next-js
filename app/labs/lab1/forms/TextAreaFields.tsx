export default function TextAreaFields() {
  return (
    <div id="wd-text-area-fields">
      <h4>Text Area Fields</h4>
      <label htmlFor="wd-text-area">Bio</label><br />
      <textarea id="wd-text-area" rows={4} cols={40} placeholder="Tell us about yourself" />
    </div>
  );
}
