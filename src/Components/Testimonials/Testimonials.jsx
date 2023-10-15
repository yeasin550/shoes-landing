const Testimonials = () => {
  return (
    <div className="my-20 md:flex items-center gap-10 w-11/12 mx-auto">
      <div className="space-y-4 ml-16 w-1/2" data-aos="fade-left">
        <h1 className="font-bold text-4xl">
          See What Our Clients <br /> Say’s About Us
        </h1>
        <p className="text-xl">
          They can tell us more about your personality – if you are outgoing and
          extroverted, practical, creative, or traditional
        </p>
        <button
          id="spotify"
          className="bg-white transform hover:-translate-y-3 mt-3 border-2 h-12 rounded-md w-5/12 duration-500 text-orange-500 border-orange-600 hover:bg-green-500 hover:text-white text-xl"
        >
          See more......
        </button>
      </div>
      <div className="lg:ml-5 w-1/2" data-aos="fade-up">
        <div className="carousel w-full h-72 rounded-md">
          <div
            id="slide1"
            className="carousel-item relative w-full border p-2 rounded-md ml-5"
          >
            <p className="m-5">
              I absolutely love this shoe-related website! They offer a
              fantastic range of footwear, catering to every style and occasion.
              Their user-friendly interface makes browsing and shopping a
              delightful experience. The vast selection ensures that I always
              find the perfect pair.
            </p>
            <div className="flex gap-3 items-center absolute mt-40 ml-12">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740&t=st=1697361808~exp=1697362408~hmac=8d35e1a2e05486ad949701ee7a38687d5347702a81d1049036397d4cf8d34bdf"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div>
                <h1 className="font-semibold">John Anderson</h1>
                <p>Officer</p>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full border p-2 rounded-md ml-5"
          >
            <p className="m-5">
              What sets this website apart is its attention to detail.
              High-quality images and comprehensive product descriptions provide
              a clear picture of each shoe. It is like trying them on virtually!
              This level of information builds trust, making it my go-to
              destination for shoe shopping.
            </p>
            <div className="flex gap-3 items-center absolute mt-40 ml-12">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1697361825~exp=1697362425~hmac=4ee8784288a4d43d016631789763866d0a2d3f345013d63d626cbd16377ee710"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div>
                <h1 className="font-semibold">Emily Carter</h1>
                <p>Officer</p>
              </div>
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
          <div
            id="slide3"
            className="carousel-item relative w-full border p-2 rounded-md ml-5"
          >
            <p className="m-5">
              Customer service is exceptional. They promptly address any
              inquiries and go the extra mile to ensure satisfaction. Shipping
              is surprisingly swift, and hassle-free returns make me feel valued
              as a customer. This convenience and care are rare gems in online
              shopping.
            </p>
            <div className="flex gap-3 items-center absolute mt-40 ml-12">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=740&t=st=1697361854~exp=1697362454~hmac=fc8d4959d147659d135f52ff129fd52b76812f0375daa5511f875561c584f41b"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div>
                <h1 className="font-semibold">David Reynolds</h1>
                <p>Officer</p>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="carousel-item relative w-full border p-2 rounded-md ml-5"
          >
            <p className="m-5">
              Overall, this website is a shoe lovers paradise. It is more than
              just a store; it is a trusted companion in the quest for the
              perfect pair. I highly recommend it to anyone looking for
              top-notch footwear, outstanding service, and a shopping experience
              that leaves you wanting more.
            </p>
            <div className="flex gap-3 items-center absolute mt-40 ml-12">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/newcomer-get-know-teammates-pleased-good-looking-businesswoman-transparent-glasses-blue-collar-shirt-smiling-broadly-assuring-good-quality-product-gray-wall_176420-25024.jpg?w=740&t=st=1697361878~exp=1697362478~hmac=016bf22b9070d7c878da17ca5f3f70ad00acc8a3043b18e0463841caa200f7ef"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div>
                <h1 className="font-semibold">Sarah Mitchell</h1>
                <p>Officer</p>
              </div>
            </div>
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
