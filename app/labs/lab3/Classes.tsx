import "./Classes.css";

export default function Classes() {
  const color = "blue";
  const dangerous = true;
  return (
    <div id="wd-classes">
      <h4>Classes</h4>
      <div className="wd-lab3-box wd-bg-yellow">Yellow background</div>
      <div className="wd-lab3-box wd-bg-blue">Blue background</div>
      <div className="wd-lab3-box wd-bg-red">Red background</div>
      <div className={`wd-lab3-box wd-bg-${color}`}>Dynamic blue background</div>
      <div className={`wd-lab3-box ${dangerous ? "wd-bg-red" : "wd-bg-green"}`}>
        Dangerous background
      </div>
      <div className="wd-lab3-box wd-bg-purple">My own purple background</div>
      <hr />
    </div>
  );
}
