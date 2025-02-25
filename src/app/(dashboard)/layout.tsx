import Sidebar from "../components/shared/Sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex gap-10">
      <div className="w-[256px]">
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
