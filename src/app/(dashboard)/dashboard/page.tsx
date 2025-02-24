import { authOptions } from "@/authOptions/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
        Dashboard page
    </div>
  );
};

export default DashboardPage;
