import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AgentList = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-5">
      <div data-aos="fade-down" data-aos-duration="1500">
        <h2 className="text-center text-3xl font-bold py-4 bg-slate-200">
          Meet Our Agents
        </h2>
      </div>
      <div data-aos="fade-left" data-aos-duration="3000">
        <div className="card lg:card-side bg-base-100 shadow-xl md:">
          <figure className="w-full">
            <img src="https://i.ibb.co/4gzZKzK/agent.webp" alt="Agent" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">DARRELL ALLEN</h2>
            <p>Founder & CEO at NestQuest Inc.</p>
            <p>
              As the founder and CEO of our real estate company, my vision is to
              revolutionize the industry through innovation and excellence. With
              a relentless commitment to integrity and customer satisfaction, we
              strive redefine the standard.
            </p>
            <p>
              <span className="font-bold text-lg">Office: </span>+099834734
            </p>
            <p>
              <span className="font-bold text-lg">Mobile: </span>+99 834 734
            </p>
            <p>
              <span className="font-bold text-lg">Email:</span>
              darrel@nestquest.com
            </p>
            <div className="flex text-3xl gap-4">
              <FaSquareFacebook />
              <FaSquareInstagram />
              <FaSquareTwitter />
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div className="card lg:card-side bg-base-100 shadow-xl md: my-6">
          <figure className="w-full">
            <img
              src="https://i.ibb.co/zG6nJZz/pexels-rdne-stock-project-7821936.jpg"
              alt="Agent"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">David Given</h2>
            <p>Company Senior Agent at NestQuest Inc.</p>
            <p>
              David Given, a seasoned Company Agent at NestQuest Inc., excels in
              providing the ideal home solutions. With an unwavering dedication
              to integrity and customer satisfaction, he ensures clients find
              their perfect homes.
            </p>
            <p>
              <span className="font-bold text-lg">Office: </span>+099684734
            </p>
            <p>
              <span className="font-bold text-lg">Mobile: </span>+99 739 734
            </p>
            <p>
              <span className="font-bold text-lg">Email:</span>
              david@nestquest.com
            </p>
            <div className="flex text-3xl gap-4">
              <FaSquareFacebook />
              <FaSquareInstagram />
              <FaSquareTwitter />
            </div>
          </div>
        </div>
        {/* Third Card */}
        <div className="card lg:card-side bg-base-100 pt-6 shadow-xl md:">
          <figure className="w-full">
            <img src="https://i.ibb.co/pxQ3KgS/agent.png" alt="Agent" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Adam Hatt</h2>
            <p>Company Senior Agent at NestQuest Inc.</p>
            <p>
              Adam Hatt, a dedicated Real Estate Agent at NestQuest Inc., offers
              personalized service to match clients with their dream homes. With
              a focus on integrity and client satisfaction, he delivers
              exceptional results in the real estate market.
            </p>
            <p>
              <span className="font-bold text-lg">Office: </span>+099 034 734
            </p>
            <p>
              <span className="font-bold text-lg">Mobile: </span>+99 121 734
            </p>
            <p>
              <span className="font-bold text-lg">Email:</span>
              adam@nestquest.com
            </p>
            <div className="flex text-3xl gap-4">
              <FaSquareFacebook />
              <FaSquareInstagram />
              <FaSquareTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentList;
