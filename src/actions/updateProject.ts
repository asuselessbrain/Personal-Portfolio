"use server";

import { redirect } from "next/navigation";

export const updateProject = async (data: FormData) => {
  const project = Object.fromEntries(data.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${project?.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  if (!res.ok) {
    throw new Error("Failed to update the project.");
  }

  redirect("/dashboard");
};
