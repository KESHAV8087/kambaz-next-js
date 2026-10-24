"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();
  const links = [
    { id: "wd-lab1-link", href: "/labs/lab1", label: "Lab 1" },
    { id: "wd-lab2-link", href: "/labs/lab2", label: "Lab 2" },
    { id: "wd-lab3-link", href: "/labs/lab3", label: "Lab 3" },
    { id: "wd-lab4-link-toc", href: "/labs/lab4", label: "Lab 4" },
    { id: "wd-lab5-link", href: "/labs/lab5", label: "Lab 5" },
  ];
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  return (
    <div id="wd-toc">
      <h4>Table of Contents</h4>
      <p>
        KESHAV ADKAR ·{" "}
        <a id="wd-toc-github" href="https://github.com/KESHAV8087/kambaz-next-js" target="_blank" rel="noreferrer">
          GitHub repository
        </a>
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              id={link.id}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={isActive(link.href) ? "font-bold text-white bg-blue-600 px-2 rounded" : "text-blue-700"}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li><Link id="wd-home-link" href="/dashboard" className="text-blue-700">Kambaz</Link></li>
        <li>
          <a id="wd-toc-book-link" href="https://kambaz.dev/book/ch1" target="_blank" rel="noreferrer">
            Chapter 1
          </a>
        </li>
        <li id="wd-toc-note">KESHAV ADKAR: &quot;Structure first, polish later.&quot;</li>
      </ul>
      <hr />
    </div>
  );
}
