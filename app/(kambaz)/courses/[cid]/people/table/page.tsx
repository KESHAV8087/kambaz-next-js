import db from "../../../../database";

export default async function PeopleTable({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const enrolledUserIds = db.enrollments
    .filter((enrollment) => enrollment.course === cid)
    .map((enrollment) => enrollment.user);
  const users = db.users.filter((user) => enrolledUserIds.includes(user._id));
  return (
    <div id="wd-people-table">
      <h3 className="text-xl font-semibold mb-3">People</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-500 border-b-2 border-gray-300">
            <th className="py-2 pr-4">Name</th>
            <th className="py-2 pr-4">Login ID</th>
            <th className="py-2 pr-4">Section</th>
            <th className="py-2 pr-4">Role</th>
            <th className="py-2 pr-4">Last Activity</th>
            <th className="py-2 pr-4">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="wd-full-name py-2 pr-4 text-red-700 font-medium">
                {user.firstName} {user.lastName}
              </td>
              <td className="wd-login-id py-2 pr-4">{user.loginId}</td>
              <td className="wd-section py-2 pr-4">{user.section}</td>
              <td className="wd-role py-2 pr-4">{user.role}</td>
              <td className="wd-last-activity py-2 pr-4">{user.lastActivity}</td>
              <td className="wd-total-activity py-2 pr-4">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
