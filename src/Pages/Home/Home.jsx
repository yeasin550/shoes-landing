import Banner from "../../Components/Banner/Banner";
import Product from "../../Components/Product/Product";
import Related from "../../Components/Related/Related";
import Support from "../../Components/Support/Support";
import Testimonials from "../../Components/Testimonials/Testimonials";
import TopSeller from "../../Components/TopSeller/TopSeller";

const Home = () => {
  return (
    <div>
      <Banner />
      <Support />
      <Product />
      <TopSeller />
      <Testimonials />
      <Related />
    </div>
  );
};

export default Home;
