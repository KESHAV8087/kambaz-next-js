import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input id="wd-username" type="text" placeholder="username" /><br /><br />
      <input id="wd-password" type="password" placeholder="password" /><br /><br />
      {/* Sign in points at /dashboard */}
      <Link id="wd-signin-btn" href="/dashboard">Sign in</Link><br /><br />
      <Link id="wd-signup-link" href="/account/signup">Sign up</Link>
    </div>
  );
}
