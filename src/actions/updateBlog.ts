"use server";

import { redirect } from "next/navigation";

export const updateBlog = async (data: FormData) => {
  const blog = Object.fromEntries(data.entries());
  console.log(blog);

  const res = await fetch(`http://localhost:3004/blogs/${blog?.id}`, {
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
