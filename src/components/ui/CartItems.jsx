import { formatTitle } from "../../utils";

const CartItems = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{formatTitle(item.title, 55)}</p>
          <div className="flex justify-between w-32 md:w-64 font-bold">
            <p>
              <span className="text-sm md:text-base font-normal mr-1">x</span>
              {item.quantity}
            </p>
            <p>${item.quantity * item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItems;
