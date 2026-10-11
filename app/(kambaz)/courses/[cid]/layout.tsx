import Link from "next/link";

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  const nav = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-bold text-red-700">Course 1234</h2>
      <hr className="my-3" />
      <div className="flex gap-6">
        <nav id="wd-courses-navigation" className="flex flex-col min-w-40">
          {nav.map((item) => {
            const href = `/courses/1234/${item.toLowerCase()}`;
            const active = item === "Home";
            return (
              <Link
                key={item}
                href={href}
                className={`px-3 py-2 ${active ? "text-red-700 font-semibold border-l-4 border-red-700" : "text-blue-700 border-l-4 border-transparent"} hover:bg-gray-100`}
              >
                {item}
              </Link>
            );
          })}
        </nav>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
