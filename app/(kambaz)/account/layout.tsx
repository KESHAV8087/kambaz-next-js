import Link from "next/link";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="wd-account-screen" style={{ display: "flex", gap: 16 }}>
      <nav id="wd-account-navigation" style={{ minWidth: 100 }}>
        <ul>
          <li><Link href="/account/signin">Signin</Link></li>
          <li><Link href="/account/signup">Signup</Link></li>
          <li><Link href="/account/profile">Profile</Link></li>
        </ul>
      </nav>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}
