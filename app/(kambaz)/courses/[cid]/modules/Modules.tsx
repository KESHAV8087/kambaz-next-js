export default function Modules() {
  const modules = [
    {
      title: "Week 1 - Course Introduction",
      lessons: [
        { title: "LEARNING OBJECTIVES", items: ["Introduction to the course", "Learn what is Web Development"] },
        { title: "READING", items: ["Full Stack Developer - Chapter 1", "Full Stack Developer - Chapter 2"] },
      ],
    },
    {
      title: "Week 2 - HTML",
      lessons: [{ title: "LEARNING OBJECTIVES", items: ["Learn HTML basics", "Build forms and tables"] }],
    },
    {
      title: "Week 3 - CSS",
      lessons: [{ title: "LEARNING OBJECTIVES", items: ["Style pages with CSS", "Use Tailwind utilities"] }],
    },
  ];
  return (
    <ul id="wd-modules" className="list-none p-0 space-y-4">
      {modules.map((m) => (
        <li key={m.title} className="wd-module border border-gray-300 rounded">
          <div className="wd-title bg-gray-200 font-semibold px-3 py-2 border-b border-gray-300">
            {m.title}
          </div>
          <ul className="wd-lessons list-none p-0">
            {m.lessons.map((lsn) => (
              <li key={lsn.title} className="wd-lesson border-b border-gray-200 last:border-0">
                <span className="wd-title block font-medium px-3 py-2 border-l-4 border-green-600">
                  {lsn.title}
                </span>
                <ul className="wd-content list-none p-0">
                  {lsn.items.map((it) => (
                    <li key={it} className="wd-content-item px-6 py-2 border-l-4 border-green-600 text-gray-700">
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
