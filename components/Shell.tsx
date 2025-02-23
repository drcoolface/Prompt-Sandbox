"use client";
import { useState } from "react";
import Side from "./Side";
import NavBar from "./NavBar";

// Shell component - consists of sidebar, navbar and main content
const Shell = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className="flex w-screen h-screen overflow-clip">
      <aside
        className={`h-full  transition-all duration-300 relative ${
          isCollapsed ? "w-[40px]" : "w-[100px] md:w-[150px]"
        }`}
      >
        <div
          className={`absolute top-0 right-1 h-screen w-[10px] flex items-center  `}
        >
          <button
            className={`border border-dotted border-foreground rounded-full  px-1
            ${isCollapsed ? "cursor-e-resize" : "cursor-w-resize"}
              `}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? "→" : "←"}
          </button>
        </div>
        <Side isCollapsed={isCollapsed} />
      </aside>
      <div className="w-full overflow-hidden">
        <NavBar />
        <main className="h-full w-full p-6">{children}</main>
      </div>
    </div>
  );
};

export default Shell;
