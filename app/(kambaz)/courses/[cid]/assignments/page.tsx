import Link from "next/link";

export default function Assignments() {
  const items = [
    { id: "123", name: "A1 - ENV + HTML", meta: "Multiple Modules | Not available until May 6 | Due May 13 | 100 pts" },
    { id: "124", name: "A2 - CSS + BOOTSTRAP", meta: "Multiple Modules | Not available until May 13 | Due May 20 | 100 pts" },
    { id: "125", name: "A3 - JAVASCRIPT + REACT", meta: "Multiple Modules | Not available until May 20 | Due May 27 | 100 pts" },
  ];
  return (
    <div id="wd-assignments">
      <div className="flex items-center gap-2 mb-4">
        <input id="wd-search-assignment" placeholder="Search for Assignments" className="border border-gray-300 rounded px-3 py-2 flex-1" />
        <button id="wd-add-assignment-group" className="px-3 py-2 bg-gray-200 rounded">+ Group</button>
        <button id="wd-add-assignment" className="px-3 py-2 bg-red-600 text-white rounded">+ Assignment</button>
      </div>
      <div className="bg-gray-200 font-semibold px-3 py-2 rounded-t flex justify-between">
        <span id="wd-assignments-title">ASSIGNMENTS</span>
        <span>40% of Total</span>
      </div>
      <ul id="wd-assignment-list" className="list-none p-0 border border-gray-300 rounded-b">
        {items.map((a) => (
          <li key={a.id} className="wd-assignment-list-item border-l-4 border-green-600 border-b border-gray-200 last:border-b-0 px-3 py-3">
            <Link className="wd-assignment-link text-lg text-gray-900 font-medium hover:underline" href={`/courses/1234/assignments/${a.id}`}>
              {a.name}
            </Link>
            <p className="text-sm text-gray-600">{a.meta}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
