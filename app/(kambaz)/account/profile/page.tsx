import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <input id="wd-username" defaultValue="alice" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <input id="wd-password" type="password" defaultValue="123" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <input id="wd-firstname" defaultValue="Alice" placeholder="First Name" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <input id="wd-lastname" defaultValue="Wonder" placeholder="Last Name" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <input id="wd-dob" type="date" defaultValue="2000-01-01" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <input id="wd-email" type="email" defaultValue="alice@wonder.com" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <select id="wd-role" defaultValue="USER" className="w-full border border-gray-300 rounded px-3 py-2 mb-3">
        <option value="USER">User</option><option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option><option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signout-btn" href="/account/signin" className="block text-center px-4 py-2 bg-red-600 text-white rounded">Sign out</Link>
    </div>
  );
}
