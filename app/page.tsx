'use client'
import OnboardingForm from "../app/components/OnbordingForm";
import { getBoardIdForUser } from "../app/actions/getBoardId";
import AuthRoute from "./services/auth";
import { useEffect } from "react";

const getBoardId = async () => {
  const boardId = await getBoardIdForUser;
  return boardId
}

const Page =  () => {
  useEffect(() => {
    getBoardId
  })
const boardId = getBoardId();

  var user: string | null = "";
  useEffect(() => {
    user = localStorage.getItem("Usuario");
  })
  

  return (
    <AuthRoute>
      <div className="bg-[url('/bg.jpeg')] h-[102vh] relative w-full bg-cover mt-[-75px] overflow-hidden">
        <OnboardingForm user={user} boardId={boardId.toString()} />
      </div>
    </AuthRoute>

  );
};

export default Page;