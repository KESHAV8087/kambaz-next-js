import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1 className="text-2xl font-bold mb-4">Sign in</h1>
      <input id="wd-username" type="text" placeholder="username" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <input id="wd-password" type="password" placeholder="password" className="w-full border border-gray-300 rounded px-3 py-2 mb-3" />
      <Link id="wd-signin-btn" href="/dashboard" className="block text-center px-4 py-2 bg-blue-600 text-white rounded mb-2">Sign in</Link>
      <Link id="wd-signup-link" href="/account/signup" className="text-blue-700">Sign up</Link>
    </div>
  );
}
