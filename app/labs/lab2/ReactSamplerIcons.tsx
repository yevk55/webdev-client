import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineHome } from "react-icons/hi2";
import { BsStarFill } from "react-icons/bs";
import { MdCloud } from "react-icons/md";
import { WiAlien } from "react-icons/wi";


export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <HiOutlineHome className="text-4xl text-blue-600" />
        <BsStarFill className="text-4xl text-blue-600" />
        <MdCloud />
        <WiAlien />
      </div>
    </div>
  );
}