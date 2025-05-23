import Button from "./buttons/Button";
import { starIcon } from "../../assets/icons/star";

const ProductInfo = ({ productData }) => {
  return (
    <div className="product-wrapper flex justify-center md:justify-between items-center gap-10 flex-wrap md:flex-nowrap bg-white p-5 rounded-sm min-h-[65vh]">
      <div className="w-[80%] md:w-full px-5 md:basis-1/3 flex-center">
        <img src={productData.image} alt={productData.title} />
      </div>
      <div className="flex flex-col gap-4 basis-2/3">
        <p className="font-semibold  text-xl md:text-3xl lg:text-5xl">
          {productData.title}
        </p>
        <div className="flex gap-3 md:gap-5 items-center flex-wrap">
          <p className="md:text-xl font-semibold border-1 rounded-md px-5 py-1">
            {productData.category}
          </p>
          <p className="flex">
            {starIcon} {productData.rating.rate} ({productData.rating.count})
          </p>
        </div>
        <p className="text-sm md:text-md">{productData.description}</p>
        <p className="font-bold text-2xl md:text-4xl mb-5">
          ${productData.price}
        </p>
        <Button
          text={"Add to cart"}
          onClick={() => console.log("Adding to cart")}
          className={
            "back-btn bg-green-450 hover:bg-green-550 text-white border-2 border-green-700"
          }
        />
      </div>
    </div>
  );
};

export default ProductInfo;
