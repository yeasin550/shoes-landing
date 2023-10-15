
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[550px]">
        <div id="item1" className="carousel-item w-full relative">
          <h1 className="absolute mt-20 mx-32 text-6xl font-bold text-purple-500">
            <span className="text-green-400">Shoe</span> of the <br /> best
            quality
          </h1>
          <p className="absolute mt-56 mx-32 text-white text-xl">
            Leather is a renowned number-one high quality shoe material,
          </p>
          <img
            src="https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?w=826&t=st=1697358615~exp=1697359215~hmac=3bd7c5970dfa32285606d243b1323feb346c4e3af05554e0dc1092d6f6afcca6"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <h1 className="absolute mt-20 mx-32 text-6xl font-bold text-purple-400">
            <span className="text-orange-600">Shoe</span> of the <br /> best
            quality
          </h1>

          <img
            src="https://img.freepik.com/free-photo/elegant-black-leather-shoes-men-black-background-photo-studio-style-ai-generative_123827-23442.jpg?w=740&t=st=1697359741~exp=1697360341~hmac=ec580f6af206b19781ce3dcfb006fcd54f7c4e261d09b44fff5bf3623b9f7090"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <h1 className="absolute mt-20 mx-32 text-6xl font-bold text-orange-400">
            <span className="text-sky-900">Shoe</span> of the <br /> best
            quality
          </h1>

          <img
            src="https://img.freepik.com/free-photo/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai_188544-19682.jpg?w=826&t=st=1697360286~exp=1697360886~hmac=40d6a1281f550d24387645ec852087ef609aec4cebae6a834f1b811655862c73"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <h1 className="absolute mt-20 mx-32 text-6xl font-bold text-purple-700">
            <span className="text-sky-900">Shoe</span> of the <br /> best
            quality
          </h1>

          <img
            src="https://img.freepik.com/free-photo/elegant-brown-leather-shoes-men-brown-background-photo-studio-style-ai-generative_123827-23444.jpg?w=740&t=st=1697360456~exp=1697361056~hmac=f44be4663256c6f35904218289b08b53a1019bcc86514944e9094e6d009a045d"
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