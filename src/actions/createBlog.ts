"use server";

import { redirect } from "next/navigation";

export const createBLog = async (data: FormData) => {
  const blog = Object.fromEntries(data.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  const blogRes = await res.json();
  const blogInfo = blogRes?.data
  

  if (blogInfo) {
    redirect("/dashboard");
  }
  return blogInfo;
};
