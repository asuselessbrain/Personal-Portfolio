"use server";

import { redirect } from "next/navigation";

export const createContact = async (data: FormData) => {
  const contactData = Object.fromEntries(data.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  const contactInfo = await res.json();

  if (contactInfo) {
    redirect("/");
  }
  return contactInfo;
};
