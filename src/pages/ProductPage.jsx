import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { productsService } from "../services/api/productService";
import ProductInfo from "../components/ui/ProductInfo";
import LayoutLoader from "../components/LayoutLoader";
import AnimatedButton from "../components/ui/buttons/AnimatedButton";
import { backIcon } from "../assets/icons/back";

const ProductPage = () => {
  const params = useParams();
  const { productId } = params;
  const navigate = useNavigate();

  const { data: productData, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => productsService.getProductById(productId),
  });

  return (
    <LayoutLoader isLoading={isLoading} addHeader={true} addFooter={true}>
      <section className="container section-padding">
        <AnimatedButton
          text={"Go to shop"}
          icon={backIcon}
          className={"bg-white mb-5 md:mb-10"}
          onClick={() => navigate("/shop")}
        />
        <ProductInfo productData={productData} />
      </section>
    </LayoutLoader>
  );
};

export default ProductPage;
