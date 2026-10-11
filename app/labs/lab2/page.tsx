import Link from "next/link";
import "./index.css";
import CssSelectors from "./CssSelectors";
import CssBoxModel from "./CssBoxModel";
import CssLayout from "./CssLayout";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-css">
      <h1>Lab 2 — CSS, Icons, and Tailwind</h1>

      <CssSelectors />
      <hr />
      <CssBoxModel />
      <hr />
      <CssLayout />
      <hr />
      <ReactIconsSampler />
      <hr />

      <h3>Tailwind</h3>
      <p>
        <Link href="/labs/lab2/tailwind" className="text-blue-600 underline">
          Open the Tailwind samples →
        </Link>
      </p>
    </div>
  );
}
