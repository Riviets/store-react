import { useQuery, useQueryClient } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import { productsService } from "../services/api/productService";

const Products = () => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAllProducts,
  });

  return (
    <section className="container section-padding">
      <div className="grid grid-cols-3 gap-5">
        {query.data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
