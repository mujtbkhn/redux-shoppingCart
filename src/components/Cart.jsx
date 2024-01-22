import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import { incrementItem, decrementItem } from "../redux/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);

  const handleIncrement = (id) => {
    dispatch(incrementItem({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem({ id }));
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col flex-wrap items-center justify-between gap-10">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-10">
            <div className="flex gap-10">
              <img src={item.img} alt={item.name} />
              <div className="text-2xl">
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                <div className="flex gap-10 text-2xl font-bold">
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  {item.count}
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
