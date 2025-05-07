import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { productsService } from "../services/api/productService";
import WithLoader from "../components/WithLoader";
import ProductInfo from "../components/ui/ProductInfo";
import Button from "../components/ui/buttons/Button";

const ProductPage = () => {
  const params = useParams();
  const { productId } = params;
  const navigate = useNavigate();

  const { data: productData, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => productsService.getProductById(productId),
  });

  return (
    <WithLoader isLoading={isLoading} addHeader={true}>
      <section className="container section-padding">
        <ProductInfo productData={productData} />
      </section>
    </WithLoader>
  );
};

export default ProductPage;
