"use client";
import React from "react";

const formAction = (event: React.FormEvent) => {
  event.preventDefault();
  alert("Form Submitted");
};
// API form component to save API key *MOCKED COMPONENT*

const ApiForm = () => {
  return (
    <div className="w-full">
      <form className="w-1/2 flex flex-col gap-4 p-4" onSubmit={formAction}>
        <label className="text-3xl font-bold">API KEY</label>
        <input
          type="password"
          aria-label="API Key"
          defaultValue={"API_KEY"}
          className="h-12 border border-gray-400 rounded"
        />
        <button className="btn-secondary w-1/2" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default ApiForm;
