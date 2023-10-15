/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { AiFillStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
const ProductDetails = ({ product }) => {
  const { title, image, price } = product;
  return (
    <div
      className="text-center relative p-3 shadow-md text-xl rounded-md"
      data-aos="zoom-in-up"
    >
      <img
        className="w-full h-80 rounded-md transition-transform transform hover:scale-90 duration-500"
        src={product?.image}
        alt=""
      />
      <h1 className="font-bold mt-3">{product?.title}</h1>
      <p>{product?.rating}</p>
      <p className="text-red-600 font-semibold">${product?.price}</p>
      {/* <button className="border border-orange-400 font-semibold py-2 px-3 w-9/12 rounded-md mt-3">
        Book Now
      </button> */}
      <button
        id="spotify"
        className="bg-white transform hover:-translate-y-3 mt-3 border-2 h-12 rounded-md w-9/12 duration-500 text-green-500 border-green-500 hover:bg-green-500 hover:text-white text-xl"
      >
        Book Now
      </button>
    </div>
  );
};

export default ProductDetails;
