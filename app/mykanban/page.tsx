import Board from "../components/Board";
import api from "../services/api";
import AuthRoute from "../services/auth";

const page = async () => {
  let UserId: any ;
  
  try {

    UserId = localStorage.getItem("UserId");
    
  } catch (error) {
    console.log(error);
  }

  const board = await api.get(`/kanban-board/1`)

  return (
    <>
      <AuthRoute >
        <Board board={board.data} />
      </AuthRoute>

    </>
  );
};

export default page;