import Button from "./buttons/Button";
import { starIcon } from "../../assets/icons/star";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProductInfo = ({ productData }) => {
  return (
    <div className="product-wrapper flex justify-center md:justify-between items-center gap-10 flex-wrap md:flex-nowrap bg-white p-5 rounded-md min-h-[65vh]">
      <div className="w-full px-20 md:px-0 md:basis-1/3 flex-center">
        <img src={productData.image} alt={productData.title} />
      </div>
      <div className="flex flex-col gap-4 basis-2/3">
        <p className="font-semibold text-3xl md:text-5xl">
          {productData.title}
        </p>
        <div className="flex gap-3 md:gap-5 items-center">
          <p className="text-lg md:text-xl font-semibold border-1 rounded-md px-5 py-1">
            {productData.category}
          </p>
          <p className="flex">
            {starIcon} {productData.rating.rate} ({productData.rating.count})
          </p>
        </div>
        <p className="text-sm md:text-md">{productData.description}</p>
        <p className="font-bold text-2xl md:text-4xl">${productData.price}</p>
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
