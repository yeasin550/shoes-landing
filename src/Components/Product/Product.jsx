import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const [products, setProducts] = useState();
  console.log(products);
  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="my-12">
      <h1 className="text-center font-semibold text-4xl" data-aos="fade-right">
        NEW PRODUCTS
      </h1>
      <p
        className="text-center text-lg"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        Per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc
        nobis videntur parum clar
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:pl-12 mt-9">
        {products?.map((product) => (
          <ProductDetails key={product.id} product={product}></ProductDetails>
        ))}
      </div>
    </div>
  );
};

export default Product;
