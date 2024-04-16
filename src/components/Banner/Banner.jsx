import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="relative">
          <img
            src="https://i.ibb.co/wg7HbXX/1.jpg"
            alt="Image 1"
            className="object-cover h-80 w-full opacity-75"
          />
          <div className=" absolute top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-black">
            <h1 className="text-4xl font-bold mb-4 bg-lime-50 rounded-xl p-2">
              Welcome to <span className="text-purple-700">NestQuest</span>
            </h1>
            <p className="text-xl font-medium text-lime-600">
              Real Estate company to fullfill your Dream
            </p>

            <input
              type="text"
              placeholder="Search....."
              className="bg-transparent border-b-2 border-purple-700 px-4 py-2 text-white placeholder-purple-900 focus:outline-none"
            />
          </div>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/KbmdW7z/banner2.jpg"
            alt="Image 2"
            className="object-cover h-80 w-full opacity-75"
          />
          <div className="absolute top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-black">
            <h1 className="text-4xl font-bold mb-4 bg-lime-50 rounded-xl p-2">
              Welcome to
              <span className="text-purple-700 "> NestQuest</span>
            </h1>
            <p className="text-xl font-medium text-lime-600">
              Real Estate company to fullfill your Dream
            </p>

            <input
              type="text"
              placeholder="Search....."
              className="bg-transparent border-b-2 border-purple-700 px-4 py-2 text-white placeholder-purple-900 focus:outline-none"
            />
          </div>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/TqCvWSG/4.jpg"
            alt="Image 3"
            className="object-cover h-80 w-full opacity-75"
          />
          <div className="absolute top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-black">
            <h1 className="text-4xl font-bold mb-4 bg-lime-50 rounded-xl p-2">
              Welcome to <span className="text-purple-700">NestQuest</span>
            </h1>
            <p className="text-xl font-medium text-lime-600 rounded-xl p-2">
              Real Estate company to fullfill your Dream
            </p>

            <input
              type="text"
              placeholder="Search....."
              className="bg-transparent border-b-2 border-purple-700 px-4 py-2 text-white placeholder-purple-900 focus:outline-none"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
