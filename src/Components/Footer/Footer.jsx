import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div data-aos="zoom-in-up">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-200 px-3 py-16 lg:pl-20">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">My Account</h1>
          <p>184 Main Rd E, St Albans VIC 3021, Bangladesh</p>
          <p>Mail Us: yeasin570550@gmail.com</p>
          <p>Phone: + 880 1712345678</p>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">Categories</h1>
          <p>Ecommerce </p>
          <p>Shopify</p>
          <p>Prestashop</p>
          <p>Opencart</p>
          <p>Magento</p>
          <p>Jigoshop</p>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">Information</h1>
          <p>Home </p>
          <p>About Us </p>
          <p>Contact Us</p>
          <p>Returns & Exchanges</p>
          <p>Shipping & Delivery</p>
          <p>Privacy Policy</p>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <p>Store Location </p>
          <p>My Account</p>
          <p>Orders Tracking</p>
          <p>Size Guide</p>
          <p>Shopping Rates</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="bg-gray-300 flex justify-between lg:px-20 py-8 px-3">
        <div>© 2022 Juan Made with by Yeasin!</div>
        <div className="flex gap-3 text-2xl items-center">
          <FaFacebookSquare />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
