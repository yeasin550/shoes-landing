import { FaEye, FaShoppingBag } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
const TopSeller = () => {
  return (
    <div className="my-20 lg:mx-12 mx-3">
      <div
        className="text-center space-y-3 my-16"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h1 className="font-bold text-4xl">Top Seller</h1>
        <p className="text-lg">
          Per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc
          nobis videntur parum clar
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div data-aos="fade-right">
          <img
            className="w-96 h-96 rounded-md"
            src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80"
            alt=""
          />
        </div>
        {/* div-1 */}
        <div className="space-y-7">
          <div className="flex gap-3">
            <div data-aos="zoom-in" className="relative overflow-hidden">
              <img
                className="w-44 h-44 rounded-md object-cover transition-transform transform scale-100 hover:scale-125"
                src="https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="space-y-8" data-aos="zoom-in-up">
              <div className="text-lg space-y-2">
                <h1 className="font-semibold">Leather Mens Slipper</h1>
                <p>$80.00</p>

                <p className="flex items-center text-[#ffc64a]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Wishlist"
                >
                  <FcLike />
                </button>
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Add To Cart"
                >
                  <FaShoppingBag />
                </button>
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Quick View"
                >
                  <FaEye />
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3" data-aos="zoom-out">
            <div className="relative overflow-hidden">
              <img
                className="w-44 h-44 rounded-md object-cover transition-transform transform scale-100 hover:scale-125"
                src="https://images.unsplash.com/photo-1617606002806-94e279c22567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="space-y-8">
              <div className="text-lg space-y-2">
                <h1 className="font-semibold">Leather Mens Slipper</h1>
                <p>$80.00</p>
                <p className="flex items-center text-[#ffc64a]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Wishlist"
                >
                  <FcLike />
                </button>
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Add To Cart"
                >
                  <FaShoppingBag />
                </button>
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Quick View"
                >
                  <FaEye />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* div-2 */}
        <div className="space-y-7">
          <div className="flex gap-3" data-aos="zoom-out">
            <div className="relative overflow-hidden">
              <img
                className="w-44 h-44 rounded-md object-cover transition-transform transform scale-100 hover:scale-125"
                src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80"
                alt=""
              />
            </div>
            <div className="space-y-8">
              <div className="text-lg space-y-2">
                <h1 className="font-semibold">Leather Mens Slipper</h1>
                <p>$80.00</p>
                <p className="flex items-center text-[#ffc64a]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Wishlist"
                >
                  <FcLike />
                </button>
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Add To Cart"
                >
                  <FaShoppingBag />
                </button>
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Quick View"
                >
                  <FaEye />
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div data-aos="zoom-in" className="relative overflow-hidden">
              <img
                className="w-44 h-44 rounded-md object-cover transition-transform transform scale-100 hover:scale-125"
                src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt=""
              />
            </div>
            <div className="space-y-8" data-aos="zoom-in-up">
              <div className="text-lg space-y-2">
                <h1 className="font-semibold">Leather Mens Slipper</h1>
                <p>$80.00</p>
                <p className="flex items-center text-[#ffc64a]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Wishlist"
                >
                  <FcLike />
                </button>
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Add To Cart"
                >
                  <FaShoppingBag />
                </button>
                <button
                  className="bg-gray-200 w-10 h-10 rounded-md text-xl flex justify-center items-center"
                  title="Quick View"
                >
                  <FaEye />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
