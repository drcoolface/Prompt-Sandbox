"use server";

import { signin } from "@/utils/auth";
import { COOKIE_NAME } from "@/utils/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Signin user with email and password
// Signin logic is handled by the server
// Save token in cookie
export const signinUser = async (
  previousState: string,
  formData: FormData
): Promise<string | never> => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return "Error: Email and password are required";
    }

    const { token } = await signin({
      email: email.toString(),
      password: password.toString(),
    });
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: true,
    });
    console.log("redirecting to /");
    redirect("/sandbox");
  } catch (e: any) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") {
      throw e; // Re-throw redirect "errors"
    }
    return `Error: Failed to sign you in ${e?.message}`;
  }
};

// Signout user by deleting token from cookie
export const signoutUser = async (): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/sign-in");
};
