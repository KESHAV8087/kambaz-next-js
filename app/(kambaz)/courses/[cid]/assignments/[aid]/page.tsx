import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <label htmlFor="wd-name" className="block font-medium mb-1">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />

      <textarea id="wd-description" rows={6} defaultValue={"The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."} className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label htmlFor="wd-points" className="w-40 text-right">Points</label>
          <input id="wd-points" type="number" defaultValue={100} className="border border-gray-300 rounded px-3 py-2 flex-1" />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-group" className="w-40 text-right">Assignment Group</label>
          <select id="wd-group" defaultValue="ASSIGNMENTS" className="border border-gray-300 rounded px-3 py-2 flex-1">
            <option>ASSIGNMENTS</option><option>QUIZZES</option><option>EXAMS</option><option>PROJECT</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-display-grade-as" className="w-40 text-right">Display Grade as</label>
          <select id="wd-display-grade-as" defaultValue="Percentage" className="border border-gray-300 rounded px-3 py-2 flex-1">
            <option>Percentage</option><option>Points</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-submission-type" className="w-40 text-right">Submission Type</label>
          <select id="wd-submission-type" defaultValue="Online" className="border border-gray-300 rounded px-3 py-2 flex-1">
            <option>Online</option><option>On Paper</option>
          </select>
        </div>
        <div className="flex gap-4">
          <label className="w-40 text-right">Assign</label>
          <div className="flex-1 border border-gray-300 rounded p-3 space-y-3">
            <div>
              <label htmlFor="wd-assign-to" className="block font-medium mb-1">Assign to</label>
              <input id="wd-assign-to" defaultValue="Everyone" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="wd-due-date" className="block font-medium mb-1">Due</label>
              <input id="wd-due-date" type="date" defaultValue="2026-05-13" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label htmlFor="wd-available-from" className="block font-medium mb-1">Available from</label>
                <input id="wd-available-from" type="date" defaultValue="2026-05-06" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="flex-1">
                <label htmlFor="wd-available-until" className="block font-medium mb-1">Until</label>
                <input id="wd-available-until" type="date" defaultValue="2026-05-20" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link href="/courses/1234/assignments" id="wd-cancel" className="px-4 py-2 bg-gray-200 rounded">Cancel</Link>
        <Link href="/courses/1234/assignments" id="wd-save" className="px-4 py-2 bg-red-600 text-white rounded">Save</Link>
      </div>
    </div>
  );
}
