// On your own AND With AI both use THIS single file and THIS single id (wd-your-form).
// Do NOT create a second form file and do NOT invent a wd-ai-form id.
// For "With AI", replace every SAMPLE default below with your own real details.
export default function YourForm() {
  return (
    <div id="wd-your-form">
      <h3>Student Profile</h3>

      <label htmlFor="wd-yf-name">Full name</label><br />
      <input id="wd-yf-name" type="text" defaultValue="KESHAV ADKAR" /><br />

      <label htmlFor="wd-yf-email">Email</label><br />
      <input id="wd-yf-email" type="email" defaultValue="lastname.f@northeastern.edu" /><br />

      <label htmlFor="wd-yf-password">Password</label><br />
      <input id="wd-yf-password" type="password" defaultValue="" /><br />

      <label htmlFor="wd-yf-bio">Bio</label><br />
      <textarea id="wd-yf-bio" rows={3} cols={40} defaultValue="CS student learning full-stack web dev." /><br />

      <fieldset>
        <legend>Standing</legend>
        <label><input type="radio" name="wd-yf-standing" value="undergrad" defaultChecked /> Undergraduate</label>{" "}
        <label><input type="radio" name="wd-yf-standing" value="grad" /> Graduate</label>
      </fieldset>

      <fieldset>
        <legend>Interests</legend>
        <label><input type="checkbox" name="wd-yf-interests" value="frontend" defaultChecked /> Frontend</label>{" "}
        <label><input type="checkbox" name="wd-yf-interests" value="backend" /> Backend</label>{" "}
        <label><input type="checkbox" name="wd-yf-interests" value="data" /> Data</label>
      </fieldset>

      <label htmlFor="wd-yf-major">Major</label><br />
      <select id="wd-yf-major" defaultValue="cs">
        <option value="cs">Computer Science</option>
        <option value="ds">Data Science</option>
        <option value="ce">Computer Engineering</option>
      </select><br />

      <label htmlFor="wd-yf-dob">Date of birth</label>{" "}
      <input id="wd-yf-dob" type="date" /><br /><br />

      <button type="submit">Save</button>{" "}
      <button type="button">Cancel</button>
    </div>
  );
}
