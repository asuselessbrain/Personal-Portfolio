import { getServerSession } from "next-auth";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/Navbar";
import { authOptions } from "@/authOptions/authOptions";

const layout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <div className="h-12">
        <NavBar session={session} />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default layout;
