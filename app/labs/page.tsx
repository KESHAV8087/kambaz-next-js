import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      {/* Full Canvas name: first then last, matching the roster */}
      <h1>KESHAV ADKAR</h1>
      <h2>CS 4550/5610 — Web Development · Section 09</h2>

      <h3>Labs</h3>
      <ul>
        <li><Link href="/labs/lab1">Lab 1</Link></li>
        <li><Link href="/labs/lab2">Lab 2</Link></li>
        <li><Link href="/labs/lab3">Lab 3</Link></li>
        <li><Link id="wd-lab4-link" href="/labs/lab4">Lab 4</Link></li>
        <li><Link href="/labs/lab5">Lab 5</Link></li>
      </ul>

      <h3>Kambaz</h3>
      <ul>
        <li><Link href="/dashboard">Kambaz</Link></li>
      </ul>

      {/* Required GitHub link for graders */}
      <p>
        <a id="wd-github" href="https://github.com/KESHAV8087/kambaz-next-js" target="_blank" rel="noreferrer">
          My GitHub repository
        </a>
      </p>
    </div>
  );
}
