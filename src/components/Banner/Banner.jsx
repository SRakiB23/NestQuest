const Banner = () => {
  return (
    <div className="carousel relative">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/MgYC2Nx/single-family-home-1026369-1280.jpg"
          className="w-full object-cover h-2/3 opacity-95"
        />
        <div className="absolute inset-0 flex md:items-center pb-96 justify-center">
          <h2 className="text-5xl text-orange-500 font-bold bg-stone-600 p-2">
            GET STARTED RIGHT NOW!
          </h2>
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 sm:top-24 md:top-80 left-10">
          <a href="#slide4" className="btn btn-circle bg-yellow-400">
            ❮
          </a>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 sm:top-24 md:top-80 right-10">
          <a href="#slide2" className="btn btn-circle bg-yellow-400">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/h2t6Mxb/single-family-home-1026368-1280.jpg"
          className="w-full object-cover h-2/3 opacity-90"
        />
        <div className="absolute inset-0 flex md:items-center pb-96 justify-center">
          <h2 className="text-5xl text-orange-500 font-bold bg-stone-600 p-2">
            GET STARTED RIGHT NOW!
          </h2>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 sm:top-24 md:top-80 left-10">
          <a href="#slide1" className="btn btn-circle bg-yellow-400">
            ❮
          </a>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 sm:top-24 md:top-80 right-10">
          <a href="#slide3" className="btn btn-circle bg-yellow-400">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/58VPFxt/building-500337-1280.jpg"
          className="w-full object-cover h-2/3 opacity-90"
        />
        <div className="absolute inset-0 flex md:items-center pb-96 justify-center">
          <h2 className="text-5xl text-orange-500 font-bold bg-stone-600 p-2">
            GET STARTED RIGHT NOW!
          </h2>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 sm:top-24 md:top-80 left-10">
          <a href="#slide2" className="btn btn-circle bg-yellow-400">
            ❮
          </a>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 sm:top-24 md:top-80 right-10">
          <a href="#slide1" className="btn btn-circle bg-yellow-400">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
