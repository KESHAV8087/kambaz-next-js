"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Account", href: "/account", match: "/account", icon: FaRegCircleUser },
    { label: "Dashboard", href: "/dashboard", match: "/dashboard", icon: AiOutlineDashboard },
    { label: "Courses", href: "/dashboard", match: "/courses", icon: LiaBookSolid },
    { label: "Calendar", href: "/calendar", match: "/calendar", icon: IoCalendarOutline },
    { label: "Inbox", href: "/inbox", match: "/inbox", icon: FaInbox },
    { label: "Labs", href: "/labs", match: "/labs", icon: LiaCogSolid },
  ];
  return (
    <nav
      id="wd-kambaz-navigation"
      className="flex flex-col items-center w-28 min-h-screen bg-black text-white"
    >
      <div className="w-full text-center py-4">
        <span className="text-red-600 font-bold text-lg">NEU</span>
      </div>
      {links.map((link) => {
        const active = pathname === link.match || pathname.startsWith(link.match + "/");
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            id={`wd-${link.label.toLowerCase()}-link`}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`flex flex-col items-center w-full py-4 ${
              active ? "bg-white text-red-600" : "text-white hover:bg-zinc-800"
            }`}
          >
            <Icon className="text-2xl text-red-600" />
            <span className="text-xs mt-1">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
