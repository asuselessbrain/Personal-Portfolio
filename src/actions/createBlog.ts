"use server";

import { redirect } from "next/navigation";

export const createBLog = async (data: FormData) => {
  const blog = Object.fromEntries(data.entries());

  const res = await fetch("http://localhost:3004/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  const contactInfo = await res.json();

  if (contactInfo) {
    redirect("/dashboard");
  }
  return contactInfo;
};
