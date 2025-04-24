import { useQuery, useQueryClient } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import { productsService } from "../services/api/productService";
import Spinner from "../components/Spinner";
import { useState } from "react";
import WithLoader from "../components/WithLoader";

const Products = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAllProducts,
  });

  return (
    <WithLoader isLoading={isLoading}>
      <section className="container section-padding">
        <div className="grid-3-cols">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </WithLoader>
  );
};

export default Products;
