/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { AiFillStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import Swal from "sweetalert2";
const ProductDetails = ({ product }) => {
  const { title, image, price, rating } = product;
  const BookNow = () => {
    const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Bookmark successfully'
})
  }
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
      <div className="flex items-center justify-center gap-5">
        <p>Rating: {rating}</p>
        <Rating
          className="text-[#ffc64a] mt-1"
          initialRating={rating} // Set the initial rating from your API data
          placeholderRating={rating}
          emptySymbol={<AiOutlineStar />}
          placeholderSymbol={<AiFillStar />}
          fullSymbol={<AiFillStar />}
          // onChange={handleRatingChange} // Handle rating changes
        />
      </div>
      <p className="text-red-600 font-semibold">${product?.price}</p>
      {/* <button className="border border-orange-400 font-semibold py-2 px-3 w-9/12 rounded-md mt-3">
        Book Now
      </button> */}
      <button
        onClick={BookNow}
        id="spotify"
        className="bg-white transform hover:-translate-y-3 mt-3 border-2 h-12 rounded-md w-9/12 duration-500 text-green-500 border-green-500 hover:bg-green-500 hover:text-white text-xl"
      >
        Book Now
      </button>
    </div>
  );
};

export default ProductDetails;
