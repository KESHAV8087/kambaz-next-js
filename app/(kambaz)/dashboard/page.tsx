import Link from "next/link";
import db from "../database";

export default function Dashboard() {
  const colors = ["bg-rose-600", "bg-indigo-600", "bg-emerald-600", "bg-amber-600"];
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-bold">Dashboard</h1>
      <hr className="my-3" />
      <h2 id="wd-dashboard-published" className="text-xl font-semibold mb-4">
        Published Courses ({courses.length})
      </h2>
      <div id="wd-dashboard-courses" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={course._id}
            className="wd-dashboard-course rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <Link href={`/courses/${course._id}/home`} className="wd-dashboard-course-link block text-inherit no-underline">
              <div className={`h-36 ${colors[index % colors.length]}`} />
              <div className="p-3">
                <h3 className="wd-dashboard-course-title text-blue-700 font-semibold truncate">{course.name}</h3>
                <p className="wd-dashboard-course-description text-sm text-gray-600 h-10 overflow-hidden">
                  {course.description}
                </p>
                <span className="inline-block mt-3 px-3 py-1 text-sm border border-gray-300 rounded">Go</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
