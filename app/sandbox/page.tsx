"use client";
import { SandboxProvider } from "@/contexts/SandBoxContext";
import { PromptSection, SettingsSection, ResponseDisplay } from "@/components";

export default function Home() {
  return (
    <SandboxProvider>
      <section className="flex flex-col md:flex-row md:gap-4 w-full max-w-[1400px] h-screen overflow-y-auto ">
        <div className="flex flex-col pb-12 w-full h-[40%] md:h-[90%] md:w-[60%] lg:w-[70%] overflow-y-auto px-2">
          <h1 className="text-2xl font-bold mb-4 mt-2 text-center">
            Prompt Engine
          </h1>

          <PromptSection />
          <ResponseDisplay />
        </div>
        <SettingsSection />
      </section>
    </SandboxProvider>
  );
}
