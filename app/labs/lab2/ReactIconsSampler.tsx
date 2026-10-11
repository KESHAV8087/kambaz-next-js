import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons">
      <h3>React Icons</h3>
      <FaReact size={40} color="#61dafb" />
      <FaCss3Alt size={40} color="#264de4" />
      <FaHtml5 size={40} color="#e34c26" />
      <MdDashboard size={40} />
      <AiFillStar size={40} color="gold" />
    </div>
  );
}
