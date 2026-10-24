"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const links = [
    { label: "Home", path: "home" },
    { label: "Modules", path: "modules" },
    { label: "Piazza", path: "piazza" },
    { label: "Zoom", path: "zoom" },
    { label: "Assignments", path: "assignments" },
    { label: "Quizzes", path: "quizzes" },
    { label: "Grades", path: "grades" },
    { label: "People", path: "people/table" },
  ];
  return (
    <nav id="wd-courses-navigation" className="flex flex-col min-w-40">
      {links.map((link) => {
        const section = link.path.split("/")[0];
        const active = pathname.split("/")[3] === section;
        return (
          <Link
            key={link.label}
            id={`wd-course-${section}-link`}
            href={`/courses/${cid}/${link.path}`}
            aria-current={active ? "page" : undefined}
            className={`px-3 py-2 border-l-4 hover:bg-gray-100 ${
              active ? "text-red-700 font-semibold border-red-700" : "text-blue-700 border-transparent"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
