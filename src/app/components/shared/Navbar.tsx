"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Session = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const NavBar = ({ session }: { session: Session | null }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const items = [
    { name: "Home", value: "/" },
    { name: "About", value: "/about" },
    { name: "Project", value: "/projects" },
    { name: "Blogs", value: "/blogs" },
    { name: "Contact", value: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-[#010313] dark:text-white z-50 text-black border-b dark:border-gray-700 p-2 fixed w-full max-w-[1440px] shadow-md">
      <div className="flex relative items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl sm:text-4xl lg:text-6xl font-semibold">
            Arfan Ahmed
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-200 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
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
        <div
          className={`${
            isOpen ? "block absolute top-20 left-0 right-10" : "hidden"
          } w-full lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col lg:flex-row lg:space-x-8 p-4 lg:p-0 mt-4 lg:mt-0 border dark:bg-gray-800 bg-gray-200 dark:lg:bg-transparent lg:bg-transparent border-gray-100 dark:border-gray-700 rounded-lg lg:border-0">
            {items.map((item) => (
              <li key={item?.value}>
                <Link
                  href={item?.value}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    pathname === item?.value
                      ? "text-green-600 font-bold py-2 px-3 block border border-green-600 rounded-md"
                      : "block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 lg:bg-transparent lg:hover:bg-transparent"
                  }`}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
            {session?.user ? (
              <>
                <li className="block py-2 px-3 rounded  lg:bg-transparent lg:hover:bg-transparent">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className="block py-2 px-3 rounded  lg:bg-transparent lg:hover:bg-transparent">
                  <Button
                    onClick={() => signOut()}
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-white"
                  >
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <Link href="/login">
                <li className="block py-2 px-3 rounded  lg:bg-transparent lg:hover:bg-transparent">
                  <Button className="hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-white">
                    Login
                  </Button>
                </li>
              </Link>
            )}
            <li className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800 lg:bg-transparent lg:hover:bg-transparent">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
