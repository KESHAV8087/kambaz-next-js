import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input id="wd-username" type="text" placeholder="username" /><br /><br />
      <input id="wd-password" type="password" placeholder="password" /><br /><br />
      <input id="wd-password-verify" type="password" placeholder="verify password" /><br /><br />
      <Link id="wd-signup-btn" href="/account/profile">Sign up</Link><br /><br />
      <Link id="wd-signin-link" href="/account/signin">Sign in</Link>
    </div>
  );
}
