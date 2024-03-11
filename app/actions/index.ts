"use server";

import { redirect } from "next/navigation";

export async function create(dynamicDelay: number = 0) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(dynamicDelay);

  if (dynamicDelay > 3000) {
    throw new Error("Delay too long");
  }

  return { message: "Hello, World!" };
}

export const formAction = (formData: FormData) => {
  console.log(Array.from(formData.entries()));

  return true;
};
