import api from "../services/api";

export const getBoardIdForUser = async () => {
  var userId: string | null = "";
  try{
    userId = localStorage.getItem("UserId");
    

  }catch(error){
    console.log(error);
  }

  const board = await api.get(`/kanban-board/${userId}`)

   return board.data.body ? board.data.id : null
}