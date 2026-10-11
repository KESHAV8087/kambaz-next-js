import Link from "next/link";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const items = [["Signin","/account/signin"],["Signup","/account/signup"],["Profile","/account/profile"]];
  return (
    <div id="wd-account-screen" className="flex gap-6">
      <nav id="wd-account-navigation" className="flex flex-col min-w-32">
        {items.map(([label, href]) => (
          <Link key={label} href={href} className="px-3 py-2 text-blue-700 border-l-4 border-transparent hover:bg-gray-100">
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex-1 max-w-sm">{children}</div>
    </div>
  );
}
