import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>GameDetailPage</h1>
      <p className="text-white">{params.id}</p>
    </>
  );
};

export default GameDetailPage;
