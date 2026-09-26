import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <input id="wd-username" type="text" defaultValue="alice" placeholder="username" /><br /><br />
      <input id="wd-password" type="password" defaultValue="123" placeholder="password" /><br /><br />
      <input id="wd-firstname" type="text" defaultValue="Alice" placeholder="First Name" /><br /><br />
      <input id="wd-lastname" type="text" defaultValue="Wonder" placeholder="Last Name" /><br /><br />
      <input id="wd-dob" type="date" defaultValue="2000-01-01" /><br /><br />
      <input id="wd-email" type="email" defaultValue="alice@wonder.com" /><br /><br />
      <select id="wd-role" defaultValue="USER">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br /><br />
      <Link id="wd-signout-btn" href="/account/signin">Sign out</Link>
    </div>
  );
}
