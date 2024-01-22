import { useParams } from "react-router-dom";
import { games } from "../gamesList";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItemToCart, decrementItem, removeItemFromCart } from "../redux/cartSlice";
import { Navbar } from "./Navbar";

export const GameDetails = () => {
  const { id } = useParams();

  const gameDetails = games.find((game) => game.id === parseInt(id, 10));

  const dispatch = useDispatch();
  const [Cart, setCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: gameDetails.id,
        img: gameDetails.img,
        name: gameDetails.name,
        price: gameDetails.price,
        description: gameDetails.description,
        count: gameDetails.count,
      })
    );
    setCart(true);
  };

  const handleRemoveFromCart = () => {
    dispatch(
      decrementItem({
        id: gameDetails.id,
      })
    );
    setCart(false);
  };

  return (
    <div>
      <Navbar />
      <img src={gameDetails.img} />
      <h2>{gameDetails.name}</h2>
      <p>{gameDetails.price}</p>
      <p>{gameDetails.description}</p>
      {Cart ? (
        <button
          onClick={handleRemoveFromCart}
          className="flex justify-center px-8 py-2 m-3 mt-2 text-xl font-bold bg-red-700 rounded-md w-60"
        >
          {" "}
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="flex justify-center px-8 py-2 m-3 text-xl font-bold bg-red-700 rounded-md w-44"
        >
          {" "}
          Add To Cart
        </button>
      )}
    </div>
  );
};
