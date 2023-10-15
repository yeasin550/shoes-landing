
const Testimonials = () => {
    return (
      <div className="my-20 md:flex items-center gap-10 w-11/12 mx-auto">
        <div className="space-y-4 ml-16">
          <h1 className="font-bold text-4xl">
            See What Our Clients <br /> Say’s About Us
          </h1>
          <p className="text-xl">
            They can tell us more about your personality – if you are outgoing
            and extroverted, practical, creative, or traditional
          </p>
          <button
            id="spotify"
            className="bg-white transform hover:-translate-y-3 mt-3 border-2 h-12 rounded-md w-5/12 duration-500 text-orange-500 border-orange-600 hover:bg-green-500 hover:text-white text-xl"
          >
            See more......
          </button>
        </div>
        <div>
          <div className="carousel w-11/12 h-96 rounded-md ml-8">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://img.freepik.com/free-photo/pair-brown-shoes-with-black-leather-sole-word-bottom_123827-23446.jpg?w=740&t=st=1697359712~exp=1697360312~hmac=9480f4f276c2186276abb683116cba952bef96aa244dbe03ee8463cefd3e6a12"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.freepik.com/free-photo/elegant-black-leather-shoes-men-black-background-photo-studio-style-ai-generative_123827-23442.jpg?w=740&t=st=1697359741~exp=1697360341~hmac=ec580f6af206b19781ce3dcfb006fcd54f7c4e261d09b44fff5bf3623b9f7090"
                className="w-full"
              />
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
                src="https://img.freepik.com/free-photo/sneaker-that-has-word-nike-it_123827-23436.jpg?w=740&t=st=1697360246~exp=1697360846~hmac=7d7f714bd28e37159b026e5961dc7303c510c0e8e6bf6481ac4c424f52ac3ffa"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.freepik.com/free-photo/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai_188544-19682.jpg?w=826&t=st=1697360286~exp=1697360886~hmac=40d6a1281f550d24387645ec852087ef609aec4cebae6a834f1b811655862c73"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonials;