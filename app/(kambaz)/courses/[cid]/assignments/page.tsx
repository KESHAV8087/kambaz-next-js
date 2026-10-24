import Link from "next/link";
import db from "../../../database";

export default async function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);
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
        {assignments.map((assignment) => (
          <li key={assignment._id} className="wd-assignment-list-item border-l-4 border-green-600 border-b border-gray-200 last:border-b-0 px-3 py-3">
            <Link
              className="wd-assignment-link text-lg text-gray-900 font-medium hover:underline"
              href={`/courses/${cid}/assignments/${assignment._id}`}
            >
              {assignment.title}
            </Link>
            <p className="text-sm text-gray-600">Multiple Modules | 100 pts</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
