import Link from "next/link";

export default function KambazLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="wd-kambaz" style={{ display: "flex", gap: 16 }}>
      <nav id="wd-kambaz-navigation" style={{ minWidth: 120 }}>
        <ul>
          <li><Link href="/account">Account</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/courses/1234/home">Courses</Link></li>
          <li><Link href="/labs">Labs</Link></li>
        </ul>
      </nav>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}
