'use server'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signIn } from "next-auth/react";
export const loginUser = async (data: any) => {
  try {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};