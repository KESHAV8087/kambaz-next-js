import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";

export default function KambazLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { label: "Account", href: "/account", Icon: FaRegCircleUser },
    { label: "Dashboard", href: "/dashboard", Icon: AiOutlineDashboard },
    { label: "Courses", href: "/courses/1234/home", Icon: LiaBookSolid },
    { label: "Calendar", href: "/dashboard", Icon: IoCalendarOutline },
    { label: "Inbox", href: "/dashboard", Icon: FaInbox },
    { label: "Labs", href: "/labs", Icon: LiaCogSolid },
  ];
  return (
    <div id="wd-kambaz" className="flex min-h-screen">
      {/* Kambaz Navigation — flex column dark sidebar */}
      <nav
        id="wd-kambaz-navigation"
        className="flex flex-col items-center w-28 min-h-screen bg-black text-white"
      >
        <div className="w-full text-center py-4 bg-black">
          <span className="text-red-600 font-bold text-lg">NEU</span>
        </div>
        {links.map(({ label, href, Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex flex-col items-center w-full py-4 text-gray-300 bg-white/0 hover:bg-zinc-800 hover:text-white"
          >
            <Icon className="text-2xl text-red-600" />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </nav>
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
