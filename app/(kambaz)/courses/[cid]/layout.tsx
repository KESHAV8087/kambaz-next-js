import Link from "next/link";

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <div style={{ display: "flex", gap: 16 }}>
        <nav id="wd-courses-navigation" style={{ minWidth: 120 }}>
          <ul>
            <li><Link href="/courses/1234/home">Home</Link></li>
            <li><Link href="/courses/1234/modules">Modules</Link></li>
            <li><Link href="/courses/1234/piazza">Piazza</Link></li>
            <li><Link href="/courses/1234/zoom">Zoom</Link></li>
            <li><Link href="/courses/1234/assignments">Assignments</Link></li>
            <li><Link href="/courses/1234/quizzes">Quizzes</Link></li>
            <li><Link href="/courses/1234/grades">Grades</Link></li>
            <li><Link href="/courses/1234/people">People</Link></li>
          </ul>
        </nav>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </div>
  );
}
