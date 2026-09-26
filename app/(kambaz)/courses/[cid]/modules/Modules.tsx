export default function Modules() {
  return (
    <ul id="wd-modules">
      <li className="wd-module">
        <div className="wd-title">Week 1 - Course Introduction</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Introduction to the course</li>
              <li className="wd-content-item">Learn what is Web Development</li>
            </ul>
          </li>
          <li className="wd-lesson">
            <span className="wd-title">READING</span>
            <ul className="wd-content">
              <li className="wd-content-item">Full Stack Developer - Chapter 1</li>
              <li className="wd-content-item">Full Stack Developer - Chapter 2</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="wd-module">
        <div className="wd-title">Week 2 - HTML</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Learn HTML basics</li>
              <li className="wd-content-item">Build forms and tables</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="wd-module">
        <div className="wd-title">Week 3 - CSS</div>
        <ul className="wd-lessons">
          <li className="wd-lesson">
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <ul className="wd-content">
              <li className="wd-content-item">Style pages with CSS</li>
              <li className="wd-content-item">Use Tailwind utilities</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
