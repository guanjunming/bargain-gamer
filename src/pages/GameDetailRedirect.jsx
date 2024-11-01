import { useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

const GameDetailRedirect = () => {
  const { game } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/games/${game.id}/${game.slug}`, { replace: true });
  }, [game, navigate]);

  return null;
};

export default GameDetailRedirect;
