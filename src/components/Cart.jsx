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
      <div className="flex flex-col items-center gap-10 justify-evenly">
        {cartItems.map((item) => (
          <div key={item.id} className="m-4">
            <div className="flex flex-col justify-center gap-10 md:flex-row">
              <img
                src={item.img}
                alt={item.name}
                className="md:max-w-[600px] max-w-92 mt-4"
              />
              <div className="flex flex-col justify-center text-2xl">
                <h1>{item.name}</h1>
                <h2>${item.price}</h2>
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
