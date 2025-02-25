"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
const LogOutButton = () => {
  return (
    <Button
      onClick={() => signOut()}
      className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white"
    >
      Logout
    </Button>
  );
};

export default LogOutButton;
