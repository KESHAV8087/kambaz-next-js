import Link from "next/link";

export default function Dashboard() {
  const courses = [
    { id: "1234", name: "CS4550 Web Development", desc: "Full Stack software developer", color: "bg-rose-600" },
    { id: "2345", name: "CS5610 Web Development", desc: "Building modern web apps", color: "bg-indigo-600" },
    { id: "3456", name: "CS3200 Databases", desc: "Relational and NoSQL databases", color: "bg-emerald-600" },
    { id: "4567", name: "CS5001 Intensive Foundations", desc: "Intro to programming", color: "bg-amber-600" },
  ];
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-bold">Dashboard</h1>
      <hr className="my-3" />
      <h2 id="wd-dashboard-published" className="text-xl font-semibold mb-4">
        Published Courses ({courses.length})
      </h2>
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {courses.map((c) => (
          <div
            key={c.id}
            className="wd-dashboard-course rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <Link href={`/courses/${c.id}/home`} className="wd-dashboard-course-link block text-inherit no-underline">
              <div className={`h-36 ${c.color}`} />
              <div className="p-3">
                <h3 className="wd-dashboard-course-title text-blue-700 font-semibold truncate">{c.name}</h3>
                <p className="wd-dashboard-course-description text-sm text-gray-600 h-10 overflow-hidden">{c.desc}</p>
                <span className="inline-block mt-3 px-3 py-1 text-sm border border-gray-300 rounded">Go</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
