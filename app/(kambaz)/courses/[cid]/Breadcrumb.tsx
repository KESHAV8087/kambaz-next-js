"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ courseName }: { courseName: string }) {
  const pathname = usePathname();
  const segment = pathname.split("/")[3] ?? "";
  const section = segment ? segment.charAt(0).toUpperCase() + segment.slice(1) : "";
  return (
    <h2 id="wd-course-heading" className="text-2xl font-bold text-red-700">
      {courseName}
      {section && ` > ${section}`}
    </h2>
  );
}
