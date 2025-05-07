import { formatTitle } from "../../utils";
import { Link } from "react-router-dom";

const CartItems = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <a
          href={`/product-page/${item.id}`}
          target="_blank"
          key={item.id}
          className="cart-item hover:-translate-y-1 transition-all duration-300"
        >
          <p>{formatTitle(item.title, 55)}</p>
          <div className="flex justify-between w-32 md:w-64 font-bold">
            <p>
              <span className="text-sm md:text-base font-normal mr-1">x</span>
              {item.quantity}
            </p>
            <p>${item.quantity * item.price}</p>
          </div>
        </a>
      ))}
    </>
  );
};

export default CartItems;
