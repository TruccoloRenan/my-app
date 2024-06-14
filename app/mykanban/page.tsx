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
      <div className="bg-[url('/bg.jpeg')] h-[102vh] relative w-full bg-cover mt-[-75px] overflow-hidden">
        <Board board={board.data} />
        </div>
      </AuthRoute>

    </>
  );
};

export default page;