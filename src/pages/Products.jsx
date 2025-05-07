import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ui/ProductCard";
import { productsService } from "../services/api/productService";
import LayoutLoader from "../components/LayoutLoader";
import AnimatedTitle from "../components/ui/AnimatedTitle";

const Products = () => {
  const {
    data: products,
    isLoading,
    error: productsFetchError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAllProducts,
  });

  if (productsFetchError) {
    throw productsFetchError;
  }

  return (
    <LayoutLoader isLoading={isLoading} addHeader={true} addFooter={true}>
      <section className="container section-padding">
        <AnimatedTitle className={"mb-10 md:mb-20"}>Products</AnimatedTitle>
        <div className="products-list grid-3-cols">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </LayoutLoader>
  );
};

export default Products;
