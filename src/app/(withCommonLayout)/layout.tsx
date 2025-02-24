import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/Navbar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="h-12">
        <NavBar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default layout;
