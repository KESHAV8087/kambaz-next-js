export default function Styles() {
  const colorBlack = { color: "black" };
  const padding10px = { padding: "10px" };
  const bgYellow = { backgroundColor: "lightyellow", ...colorBlack, ...padding10px };
  const bgRed = { backgroundColor: "lightcoral", ...colorBlack, ...padding10px };
  const bgBlue = { backgroundColor: "lightblue", ...colorBlack, ...padding10px };
  const bgGreen = { backgroundColor: "lightgreen", ...colorBlack, ...padding10px };
  return (
    <div id="wd-styles">
      <h4>Styles</h4>
      <div style={{ ...bgYellow }}>Yellow background</div>
      <div style={{ ...bgRed }}>Red background</div>
      <div style={{ ...bgBlue }}>Blue background</div>
      <div style={{ ...bgGreen }}>Green background</div>
      <hr />
    </div>
  );
}
