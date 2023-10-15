
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[550px]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/brown-man-s-leather-derby-shoes_53876-97144.jpg?w=740&t=st=1697334889~exp=1697335489~hmac=640e52f7f3b2873b5fed1355a6d34cf375f2aa92b16984b7456ddde34e4d1ff2"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/brown-leather-shoes_1203-7561.jpg?w=740&t=st=1697334813~exp=1697335413~hmac=2f2322c849e9ec4f6a0bbb4f61a1fad8ea8de8656606b0957ed7f29ab512ae46"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/sneakers-shoes_1203-8036.jpg?w=740&t=st=1697334836~exp=1697335436~hmac=8e979cee1929e268a3eeec0a5e05096a4daf887db32a7da632d8e6247f3eee4f"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/brown-leather-slip-men-s-shoes-fashion_53876-101530.jpg?w=826&t=st=1697334923~exp=1697335523~hmac=7b6943c8898a651488716fc1050981ffd62b3040f28fa1a113a58304e60dc518"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;