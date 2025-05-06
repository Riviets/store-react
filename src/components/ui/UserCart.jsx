import { useQuery } from "@tanstack/react-query";
import { productsService } from "../../services/api/productService";
import { useEffect, useState } from "react";
import CartItems from "./CartItems";

const UserCart = ({ cart }) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAllProducts,
  });
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCardItems = () => {
      if (!products || !cart) return [];
      return cart.products.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return { ...product, quantity: item.quantity };
      });
    };
    const cartItems = getCardItems();
    setCartItems(cartItems);
  }, [products, cart]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-3 md:gap-5">
          <CartItems items={cartItems} />
        </div>
      )}
    </>
  );
};

export default UserCart;
