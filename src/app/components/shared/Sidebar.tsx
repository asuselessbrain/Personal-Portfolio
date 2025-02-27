"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const items = [
    { name: "Dashboard", value: "/dashboard" },
    { name: "Blogs", value: "/dashboard/blogs" },
    { name: "Project", value: "/dashboard/projects" },
    { name: "Messages", value: "/dashboard/messages" },
    { name: "Profile", value: "/dashboard/profile" },
  ];
  return (
    <div className="fixed transform min-h-screen w-[256px] ease-in-out flex justify-start items-start bg-gray-900 flex-col">
      <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
        <Link href="/"><p className="text-2xl leading-6 text-white">Arfan Ahmed</p></Link>
      </div>

      <div className="mt-6 flex flex-col justify-start items-start pl-4 w-full border-gray-600 space-y-3 pb-5">
        {items.map((item) => (
          <Link
            key={item?.value}
            href={item?.value}
            className={`${
              pathname === item?.value
                ? "text-green-600 font-bold py-2 px-3 w-full text-left border border-green-600 rounded-md"
                : "py-2 px-3 rounded hover:bg-gray-100 w-full text-left dark:hover:bg-gray-800"
            }`}
          >
            {item?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
