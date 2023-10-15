import { FaShippingFast } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
const Support = () => {
    return (
      <div className="my-12 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="bg-[#FCEDDA] py-7 px-5 rounded-md flex items-center gap-3"
          data-aos="fade-right"
        >
          <FaShippingFast className="text-5xl" />
          <div>
            <h1 className="font-semibold text-xl">FREE SHIPPING</h1>
            <p>Free shipping on all order</p>
          </div>
        </div>
        <div
          className="bg-[#F2FBCB] py-7 px-5 rounded-md flex items-center gap-3"
          data-aos="flip-left"
        >
          <BsFillPersonLinesFill className="text-5xl" />
          <div>
            <h1 className="font-semibold text-xl">ONLINE SUPPORT</h1>
            <p>Online support 24 hours a day</p>
          </div>
        </div>
        <div
          className="bg-[#F7D8F9] py-7 px-5 rounded-md flex items-center gap-3"
          data-aos="fade-left"
        >
          <AiFillDollarCircle className="text-5xl" />
          <div>
            <h1 className="font-semibold text-xl">MONEY RETURN</h1>
            <p>Back guarantee under 5 days</p>
          </div>
        </div>
      </div>
    );
};

export default Support;