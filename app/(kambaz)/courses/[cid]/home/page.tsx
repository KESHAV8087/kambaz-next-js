import Modules from "../modules/Modules";

export default async function CourseHome({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const status = [
    "Import Existing Content",
    "Import from Commons",
    "Choose Home Page",
    "View Course Stream",
    "New Announcement",
    "New Analytics",
    "View Course Notifications",
  ];
  return (
    <div id="wd-home" className="flex gap-6">
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-3">Modules</h3>
        <Modules cid={cid} />
      </div>
      <div id="wd-course-status" className="min-w-64">
        <h3 className="text-xl font-semibold mb-3">Course Status</h3>
        <div className="flex gap-2 mb-3">
          <button className="flex-1 px-3 py-2 bg-gray-200 rounded">Unpublish</button>
          <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded">Publish</button>
        </div>
        <ul className="list-none p-0 space-y-2">
          {status.map((s) => (
            <li key={s} className="border border-gray-200 rounded px-3 py-2 text-gray-700">{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
