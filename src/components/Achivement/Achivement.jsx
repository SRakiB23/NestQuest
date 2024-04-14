import { FaHouse } from "react-icons/fa6";
import { GiKeyring } from "react-icons/gi";
import { FaRegSmile } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import CountUp from "react-countup";

const Achivement = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-yellow-300 via-purple-400 to-blue-300 mt-4 justify-center text-black md:py-20 px-20 md:flex items-center  gap-20">
        <div className="px-4">
          <div className="flex gap-2 items-center font-bold">
            <FaHouse className="text-3xl" />
            <CountUp className="text-3xl" end={999} duration={10} />
          </div>
          <p className="text-xl">Complete Project</p>
        </div>
        <div className="px-4">
          <div className="flex gap-2 items-center font-bold">
            <GiKeyring className="text-4xl font-bold" />
            <CountUp className="text-3xl" end={520} duration={10} />
          </div>
          <p className="text-xl">Property Sold</p>
        </div>
        <div className="px-4">
          <div className="flex gap-2 items-center font-bold">
            <FaRegSmile className="text-3xl" />
            <CountUp className="text-3xl" end={380} duration={10} />
          </div>
          <p className="text-xl">Happy Clients</p>
        </div>
        <div className="px-4">
          <div className="flex gap-2 items-center font-bold">
            <GoTrophy className="text-3xl" />
            <CountUp className="text-3xl" end={110} duration={10} />
          </div>
          <p className="text-xl">Award Win</p>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
