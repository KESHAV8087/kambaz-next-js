export default function HighlightedBox({
  children,
  id,
  color = "black",
  backgroundColor = "lightblue",
}: {
  children: React.ReactNode;
  id?: string;
  color?: string;
  backgroundColor?: string;
}) {
  return (
    <div id={id} style={{ color, backgroundColor, padding: 8 }}>
      {children}
    </div>
  );
}
