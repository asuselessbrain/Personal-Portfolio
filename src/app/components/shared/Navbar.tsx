"use client";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const items =[
    {name: 'Home', value : '/'},
    {name: 'About', value : '/about'},
    {name: 'Project', value : '/projects'},
    {name: 'Blogs', value : '/blogs'},
    {name: 'Contact', value : '/contact'},
  ]

  return (
    <nav className="bg-white dark:bg-[#010313] dark:text-white z-50 text-black border-b dark:border-gray-700 p-2 fixed w-full max-w-[1440px] shadow-md">
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-4xl md:text-6xl font-semibold">
            Arfan Ahmed
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-200 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 dark:border-gray-700 rounded-lg md:border-0">
            {items.map((item) => (
              <li key={item?.value}>
                <Link
                  href={item?.value}
                  className={`${
                    pathname === item?.value
                      ? "text-green-600 font-bold py-2 px-3 block border border-green-600 rounded-md"
                      : "block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 md:bg-transparent md:hover:bg-transparent"
                  }`}
                >
                  {item?.name}
                </Link>
              </li>
              
            ))}
            <li
                  className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 md:bg-transparent md:hover:bg-transparent"
                >
                   <ModeToggle /> 
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
