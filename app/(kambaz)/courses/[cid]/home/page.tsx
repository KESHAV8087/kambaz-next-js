import Modules from "../modules/Modules";

// Home assembles Modules plus a Course Status panel.
export default function CourseHome() {
  return (
    <div id="wd-home" style={{ display: "flex", gap: 16 }}>
      <div style={{ flex: 1 }}>
        <h3>Modules</h3>
        <Modules />
      </div>
      <div id="wd-course-status" style={{ minWidth: 200 }}>
        <h3>Course Status</h3>
        <button type="button">Unpublish</button>{" "}
        <button type="button">Publish</button>
        <ul>
          <li>Import Existing Content</li>
          <li>Import from Commons</li>
          <li>Choose Home Page</li>
          <li>View Course Stream</li>
          <li>New Announcement</li>
          <li>New Analytics</li>
          <li>View Course Notifications</li>
        </ul>
      </div>
    </div>
  );
}
