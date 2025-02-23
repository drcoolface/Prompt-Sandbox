"use client";

import { signinUser } from "@/actions/auth";
import { useActionState } from "react";

// SigninForm component - consists of form fields for user to sign in
// Uses serveraction to signin user
const SigninForm = () => {
  const [error, action, isLoading] = useActionState(signinUser, "");
  return (
    <div className="w-full max-w-md mx-auto  flex items-center min-h-screen">
      <form
        action={action}
        className="w-full bg-content1 border border-default-100 shadow-lg rounded-lg p-6 flex flex-col gap-4"
      >
        <h3 className="text-3xl font-semibold text-center">GEN AI </h3>

        <h3 className="text-2xl font-semibold mb-2 text-center">Sign in</h3>
        <div className="text-center ">
          <h5 className="text-xs text-gray-500">user1@gmail.com</h5>
          <h5 className="text-xs text-gray-500">password1</h5>
        </div>

        <div className="space-y-4">
          <input
            required
            placeholder="Email"
            name="email"
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
          />

          <input
            name="password"
            required
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
          />
        </div>

        <button type="submit" className="btn-secondary">
          Sign in
          {isLoading && <span className="ml-2 animate-spin">...</span>}
        </button>
        {error && (
          <div className="text-red-500 text-sm text-center mt-2">{error}</div>
        )}
      </form>
    </div>
  );
};

export default SigninForm;
