import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../redux/cartSlice";

const GamesCard = (props) => {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: props.id,
        img: props.img,
        name: props.name,
        price: props.price,
        description: props.description,
      })
    );
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    dispatch(
      removeItemFromCart({
        id: props.id,
      })
    );
    setInCart(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-between text-white bg-black md:h-[350px] max-w-[350px] md:w-[500px]">
        <img className="w-96" src={props.img} alt={props.name} />
        <div className="flex justify-evenly">
          <h3>{props.name}</h3>
          <h4 className="pl-4">${props.price}</h4>
          <h4 className="hidden">{props.description}</h4>
        </div>
        {inCart ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRemoveFromCart();
            }}
            className="flex justify-center px-8 py-2 m-3 mt-2 text-xl font-bold bg-red-700 rounded-md w-60"
          >
            {" "}
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            className="flex justify-center px-8 py-2 m-3 text-xl font-bold bg-red-700 rounded-md w-44"
          >
            {" "}
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default GamesCard;
