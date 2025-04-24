import { Link } from "react-router-dom";
import { formatTitle } from "../utils";
const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product-page/${product.id}`}
      className="border-1 border-black rounded-md cursor-pointer shadow-lg hover:-translate-y-1 transition duration-300"
    >
      <div className="flex-center mb-5 border-b-2 py-5">
        <img src={product.image} alt={product.title} className="size-40" />
      </div>
      <div className="flex flex-col justify-between gap-2 p-5">
        <h3 className="font-bold text-2xl">{formatTitle(product.title)}</h3>
        <p className="mb-auto">{product.category}</p>
        <p className="font-semibold text-xl">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
