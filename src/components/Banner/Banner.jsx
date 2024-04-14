const Banner = () => {
  return (
    <div className="carousel relative md: h-96 pb-4">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/bFSBC4k/banner1.webp"
          className="w-full object-cover opacity-95"
        />
        <div className="absolute inset-0 flex  md:items-center justify-center">
          <h2 className="animate__animated animate__bounceInDown text-5xl text-orange-500 font-bold md:bg-stone-100 p-2">
            GET STARTED RIGHT NOW!
          </h2>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/KbmdW7z/banner2.jpg"
          className="w-full object-cover opacity-95"
        />
        <div className="absolute inset-0 flex md:items-center justify-center">
          <h2 className="animate__animated animate__bounceInDown text-5xl text-orange-500 font-bold bg-stone-100 p-2">
            GET STARTED RIGHT NOW!
          </h2>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/bFY9yrW/banner3.webp"
          className="w-full object-cover opacity-95"
        />
        <div className="absolute inset-0 flex md:items-center justify-center">
          <h2 className="animate__animated animate__bounceInDown text-5xl text-orange-500 font-bold bg-stone-100 p-2">
            Best Houses to Buy
          </h2>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
