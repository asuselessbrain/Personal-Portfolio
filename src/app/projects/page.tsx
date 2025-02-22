import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Arfan Ahmed | Projects",
    description: "Arfan Ahmed Portfolio Projects",
  };

const page = () => {
    return (
        <div className="mt-20 min-h-[calc(100vh-234px)]">
            This is project page
        </div>
    );
};

export default page;