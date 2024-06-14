import OnboardingForm from "../app/components/OnbordingForm";
import { getBoardIdForUser } from "../app/actions/getBoardId";
import AuthRoute from "./services/auth";

const page = async () => {

  const boardId = await getBoardIdForUser;

  var user: string | null = "";

  try {
    user = localStorage.getItem("Usuario");

  } catch (error) {
    console.log(error)
  }

  return (
    <AuthRoute>
      <div className="bg-[url('/bg.jpeg')] h-[102vh] relative w-full bg-cover mt-[-75px] overflow-hidden">
        <OnboardingForm user={user} boardId={boardId.toString()} />
      </div>
    </AuthRoute>

  );
};

export default page;