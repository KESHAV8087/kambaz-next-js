import Link from "next/link";

export default function Dashboard() {
  const courses = [
    { id: "1234", name: "CS4550 Web Development", desc: "Full Stack software developer" },
    { id: "2345", name: "CS5610 Web Development", desc: "Building modern web apps" },
    { id: "3456", name: "CS3200 Databases", desc: "Relational and NoSQL databases" },
    { id: "4567", name: "CS5001 Intensive Foundations", desc: "Intro to programming" },
  ];
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        style={{ display: "flex", flexWrap: "wrap", gap: 16 }}
      >
        {courses.map((c) => (
          <div
            key={c.id}
            className="wd-dashboard-course"
            style={{ border: "1px solid #ccc", width: 260, padding: 8 }}
          >
            <Link href={`/courses/${c.id}/home`} className="wd-dashboard-course-link">
              <h3 className="wd-dashboard-course-title">{c.name}</h3>
              <p className="wd-dashboard-course-description">{c.desc}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
