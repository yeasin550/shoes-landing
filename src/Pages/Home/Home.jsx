import Banner from "../../Components/Banner/Banner";
import Product from "../../Components/Product/Product";
import Related from "../../Components/Related/Related";
import Support from "../../Components/Support/Support";
import TopSeller from "../../Components/TopSeller/TopSeller";

const Home = () => {
  return (
    <div>
          <Banner />
          <Support/>
      <Product />
          <TopSeller />
          <Related/>
      
    </div>
  );
};

export default Home;
