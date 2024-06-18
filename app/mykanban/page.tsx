'use client'
import { useEffect } from "react";
import Board from "../components/Board";
import api from "../services/api";
import AuthRoute from "../services/auth";

const Page = async () => {
  let UserId: any;

  useEffect(() => {
    UserId = localStorage.getItem("UserId");
  }, [])

  const board = await api.get(`/kanban-board/1`)

  return (
    <>
      <AuthRoute >
        <div className="bg-[url('/bg.jpeg')] h-[102vh] relative w-full bg-cover mt-[-75px] ">
          <Board board={board.data} />
        </div>
      </AuthRoute>

    </>
  );
};

export default Page;