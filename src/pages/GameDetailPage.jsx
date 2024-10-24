import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>GameDetailPage</h1>
      <p>{params.gameId}</p>
    </>
  );
};

export default GameDetailPage;
