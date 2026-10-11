export default function People() {
  const people = [
    { name: "Tony Stark", role: "STUDENT", login: "001", section: "S101", active: "2 days ago", total: "10:21:32" },
    { name: "Bruce Wayne", role: "STUDENT", login: "002", section: "S101", active: "5 hours ago", total: "08:14:02" },
    { name: "Steve Rogers", role: "TA", login: "003", section: "S101", active: "yesterday", total: "20:45:19" },
    { name: "Natasha Romanoff", role: "PROFESSOR", login: "004", section: "S101", active: "just now", total: "41:02:55" },
  ];
  return (
    <div id="wd-people">
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
          {people.map((p) => (
            <tr key={p.login} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-2 pr-4 text-red-700 font-medium">{p.name}</td>
              <td className="py-2 pr-4">{p.login}</td>
              <td className="py-2 pr-4">{p.section}</td>
              <td className="py-2 pr-4">{p.role}</td>
              <td className="py-2 pr-4">{p.active}</td>
              <td className="py-2 pr-4">{p.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
