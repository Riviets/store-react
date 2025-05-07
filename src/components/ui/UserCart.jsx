import { useQuery } from "@tanstack/react-query";
import { productsService } from "../../services/api/productService";
import { useEffect, useState } from "react";
import CartItems from "./CartItems";
import AnimatedTitle from "./AnimatedTitle";
import { cartIcon } from "../../assets/icons/cart";

const UserCart = ({ cart }) => {
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
        <div className="flex flex-col gap-3 md:gap-5 bg-white px-5 md:px-8 py-8 md:py-12 rounded-md">
          <AnimatedTitle className={"!text-zinc-900 mb-8"}>
            Cart
            {cartIcon}
          </AnimatedTitle>
          <CartItems items={cartItems} />
        </div>
      )}
    </>
  );
};

export default UserCart;
