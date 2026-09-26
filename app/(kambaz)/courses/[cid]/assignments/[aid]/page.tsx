import Link from "next/link";

// Assignment Editor (On your own — matches the book LiveDemo shape).
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />

      <textarea id="wd-description" rows={6} cols={50} defaultValue={
        "The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
      } /><br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right"><label htmlFor="wd-points">Points</label></td>
            <td><input id="wd-points" type="number" defaultValue={100} /></td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-group">Assignment Group</label></td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-display-grade-as">Display Grade as</label></td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option>Percentage</option>
                <option>Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-submission-type">Submission Type</label></td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option>Online</option>
                <option>On Paper</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right"><label>Assign</label></td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input id="wd-assign-to" defaultValue="Everyone" /><br />
              <label htmlFor="wd-due-date">Due</label><br />
              <input id="wd-due-date" type="date" defaultValue="2026-05-13" /><br />
              <label htmlFor="wd-available-from">Available from</label>{" "}
              <input id="wd-available-from" type="date" defaultValue="2026-05-06" />{" "}
              <label htmlFor="wd-available-until">Until</label>{" "}
              <input id="wd-available-until" type="date" defaultValue="2026-05-20" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Link href="/courses/1234/assignments" id="wd-cancel">Cancel</Link>{" "}
      <Link href="/courses/1234/assignments" id="wd-save">Save</Link>
    </div>
  );
}
