"use server";

import { redirect } from "next/navigation";

export const updateBlog = async (data: FormData) => {
  const blog = Object.fromEntries(data.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${blog?.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  if (!res.ok) {
    throw new Error("Failed to update the blog.");
  }

  redirect("/dashboard");
};
