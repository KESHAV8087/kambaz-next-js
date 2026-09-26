// Props are attributes only (no styling logic beyond passing them through).
export default function HighlightedParagraph({
  children,
  color = "black",
  backgroundColor = "yellow",
}: {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
}) {
  return (
    <p style={{ color, backgroundColor }}>
      {children}
    </p>
  );
}
