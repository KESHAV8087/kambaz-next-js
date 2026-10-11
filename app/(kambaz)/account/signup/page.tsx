import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1 className="text-2xl font-bold mb-4">Sign up</h1>
      <input id="wd-username" type="text" placeholder="username" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <input id="wd-password" type="password" placeholder="password" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <input id="wd-password-verify" type="password" placeholder="verify password" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <Link id="wd-signup-btn" href="/account/profile" className="block text-center px-4 py-2 bg-blue-600 text-white rounded mb-2">Sign up</Link>
      <Link id="wd-signin-link" href="/account/signin" className="text-blue-700">Sign in</Link>
    </div>
  );
}
