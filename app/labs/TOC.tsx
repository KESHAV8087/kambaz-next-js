import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <h4>Table of Contents</h4>
      <ul>
        <li><Link href="/labs/lab1">Lab 1</Link></li>
        <li><Link href="/labs/lab2">Lab 2</Link></li>
        <li><Link href="/labs/lab3">Lab 3</Link></li>
        <li><Link id="wd-lab4-link" href="/labs/lab4">Lab 4</Link></li>
        <li><Link href="/labs/lab5">Lab 5</Link></li>
        <li><Link href="/dashboard">Kambaz</Link></li>
        {/* With AI — link to Chapter 1 of the book, labeled "Chapter 1" */}
        <li>
          <a id="wd-toc-book-link" href="https://kambaz.dev/book/ch1" target="_blank" rel="noreferrer">
            Chapter 1
          </a>
        </li>
        {/* On your own — a personal note / motto */}
        <li id="wd-toc-note">KESHAV ADKAR — &quot;Structure first, polish later.&quot;</li>
      </ul>
      <hr />
    </div>
  );
}
