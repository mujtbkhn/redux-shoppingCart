import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Cart } from "./Cart";
import { Navbar } from "./Navbar";
import { Body } from "./Body";
import { GameDetails } from "./gameDetails";

const Route = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Body />
        </>
      ),
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/gameDetails/:id",
      element: <GameDetails />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Route;
