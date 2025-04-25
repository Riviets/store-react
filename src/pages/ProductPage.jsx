import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { productsService } from "../services/api/productService";
import Spinner from "../components/ui/Spinner";
import { useEffect } from "react";
import WithLoader from "../components/WithLoader";
import ProductInfo from "../components/ui/ProductInfo";
import Button from "../components/ui/Button";

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
        <Button
          text={"Back"}
          className={"mb-15 hover:bg-zinc-700 hover:text-white"}
          onClick={() => navigate(-1)}
        />
        <ProductInfo productData={productData} />
      </section>
    </WithLoader>
  );
};

export default ProductPage;
