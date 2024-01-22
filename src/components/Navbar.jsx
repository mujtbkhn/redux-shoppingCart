import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const cartItems = useSelector((item) => item.cart);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);
  const cartTotal = cartItems
    .reduce((acc, item) => acc + item.price * item.count, 0)
    .toFixed(3);
  return (
    <div>
      <div className="flex items-center justify-around w-full text-white bg-black h-14">
        <Link to={"/"}>
          <h1>Shopping Cart</h1>
        </Link>
        <div>
          <Link to={"/cart"}>
            <FaShoppingCart className="relative w-10" />
            <div className="absolute top-5">{totalQuantity}</div>
          </Link>
        </div>
        (Price: $ {cartTotal})
      </div>
    </div>
  );
};
