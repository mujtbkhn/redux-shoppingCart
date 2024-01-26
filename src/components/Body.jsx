import { Link, useParams } from "react-router-dom";
import { games } from "../gamesList";
import GamesCard from "./gamesCard";

export const Body = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-10 p-10 ">
        {games.map((game) => (
          <Link to={`/gameDetails/${game.id}`} key={game.id}>
            <GamesCard {...game} />
          </Link>
        ))}
      </div>
    </div>
  );
};
