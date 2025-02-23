"use client";

import { signoutUser } from "@/actions/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { route: "/sandbox", name: "Home" },
  { route: "/sandbox/profile", name: "Profile" },
];

export const isActive = (path: string, route: string) => {
  if (route === "/sandbox") {
    return path === "/sandbox";
  } else {
    return path.includes(route);
  }
};

const Side = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const path = usePathname();
  const activeClass = "bg-primary text-2xl font-bold ";

  return (
    <div className="h-full">
      <div className={`my-2 md:pt-2 text-3xl px-2 whitespace-nowrap`}>
        GEN AI
      </div>

      <div>
        {links.map((link) => (
          <div className="w-[95%]" key={link.route}>
            <Link href={link.route}>
              <div
                className={`w-full h-full py-2 px-2 rounded-lg  ${
                  isActive(path, link.route) ? activeClass : ""
                } transition-transform duration-300 ${
                  isCollapsed
                    ? "transform translate-x-2"
                    : "transform -translate-x-0"
                } `}
              >
                {isCollapsed ? link.name.charAt(0) : link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={signoutUser}
        className="px-4 pr-4 absolute left-[-0.5rem] bottom-4 cursor-pointer tracking-[-1.75rem] text-4xl"
        title="Sign Out"
      >
        &#128682;&#127939;
      </button>
    </div>
  );
};

export default Side;
