import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getGameById } from "../api/api";

const GameDetailRedirect = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["game", id],
    queryFn: () => getGameById(id),
  });

  useEffect(() => {
    if (!isLoading && data) {
      navigate(`/games/${id}/${data.slug}`, { replace: true });
    }
  }, [data, id, isLoading, navigate]);

  return null;
};

export default GameDetailRedirect;
