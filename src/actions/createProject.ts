"use server";

import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const project = Object.fromEntries(data.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  const projectInfo = await res.json();

  if (projectInfo) {
    redirect("/dashboard");
  }
  return projectInfo;
};
