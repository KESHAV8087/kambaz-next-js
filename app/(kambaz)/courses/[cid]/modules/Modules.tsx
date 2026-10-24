import db from "../../../database";

export default function Modules({ cid }: { cid: string }) {
  const modules = db.modules.filter((module) => module.course === cid);
  return (
    <ul id="wd-modules" className="list-none p-0 space-y-4">
      {modules.map((module) => (
        <li key={module._id} className="wd-module border border-gray-300 rounded">
          <div className="wd-title bg-gray-200 font-semibold px-3 py-2 border-b border-gray-300">
            {module.name}
          </div>
          <ul className="wd-lessons list-none p-0">
            {module.lessons.map((lesson) => (
              <li key={lesson._id} className="wd-lesson px-6 py-2 border-l-4 border-green-600 border-b border-gray-200 last:border-b-0">
                {lesson.name}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
