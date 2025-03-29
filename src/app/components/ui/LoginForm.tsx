"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  return (
    <div className="font-[sans-serif] dark:bg-gray-900 dark:text-gray-100">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] dark:shadow-[0_2px_22px_-4px_rgba(0,0,0,0.5)] max-md:mx-auto bg-white dark:bg-gray-800">
            <div className="space-y-4">
              <div className="mb-8">
                <h3 className="text-gray-800 text-center dark:text-gray-100 text-3xl font-bold">
                  Sign in
                </h3>
              </div>

              <form>
                <label className="text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                  User name
                </label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-full text-sm text-gray-800 dark:text-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 pl-4 pr-10 py-3 rounded-lg outline-blue-600 dark:outline-blue-500 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Enter user name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[18px] h-[18px] absolute right-4 text-gray-400 dark:text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5z"></path>
                  </svg>
                </div>
              </form>

              <div>
                <label className="text-gray-800 dark:text-gray-200 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-sm text-gray-800 dark:text-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 pl-4 pr-10 py-3 rounded-lg outline-blue-600 dark:outline-blue-500 placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer text-gray-400 dark:text-gray-500"
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 text-sm text-gray-800 dark:text-gray-200"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="button"
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>

              <p className="my-6 text-sm text-gray-400 text-center">
                or continue with
              </p>

              <div className="space-x-6 flex justify-center">
                <button
                  onClick={() =>
                    signIn("google", { callbackUrl: "https://arfan-ahmed.vercel.app/dashboard" })
                  }
                  type="button"
                  className="border-none outline-none"
                >
                  <Image
                    src="https://devicon-website.vercel.app/api/google/original.svg"
                    alt="google-icon"
                    width={40}
                    height={40}
                  />
                </button>
                <button
                  onClick={() =>
                    signIn("github", { callbackUrl: "https://arfan-ahmed.vercel.app/dashboard" })
                  }
                  type="button"
                  className="border-none outline-none"
                >
                  <FaGithub size={40} />
                </button>
              </div>

              <p className="text-sm !mt-8 text-center text-gray-500 dark:text-gray-400">
                Do not have an account{" "}
                <a
                  href="javascript:void(0);"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>

          <div className="max-md:mt-8">
            <Image
              width={200}
              height={200}
              src="https://readymadeui.com/login-image.webp"
              className="w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover rounded-lg dark:brightness-90"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
