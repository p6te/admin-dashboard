import Single from "../../components/single";
import { singleProduct } from "../../data";

const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
