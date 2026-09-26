export default function HighlightedParagraph({
  children,
  id,
  color = "black",
  backgroundColor = "yellow",
}: {
  children: React.ReactNode;
  id?: string;
  color?: string;
  backgroundColor?: string;
}) {
  return (
    <p id={id} style={{ color, backgroundColor }}>
      {children}
    </p>
  );
}
