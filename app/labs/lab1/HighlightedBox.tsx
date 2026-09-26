// Wraps nested children with the same style props.
export default function HighlightedBox({
  children,
  color = "black",
  backgroundColor = "lightblue",
}: {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
}) {
  return (
    <div style={{ color, backgroundColor, padding: 8 }}>
      {children}
    </div>
  );
}
