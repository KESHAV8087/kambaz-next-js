import TOC from "./TOC";

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TOC />
      <div>{children}</div>
    </div>
  );
}
