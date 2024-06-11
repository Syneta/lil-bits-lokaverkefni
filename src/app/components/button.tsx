"use client";
// NextButton.tsx

import { NextButtonProps } from "../types";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export const NextButton: React.FC<NextButtonProps> = ({ pageName, name }) => {
  const pathname = usePathname();
  const active = pathname === `/${pageName}` ? "active" : "";
  const router = useRouter();

  const onClick = () => {
    // TODO: Update context or something, idk -
    // pass onclick function to NextButton so that each page can decide what it wants to do with the context
    router.push(`/${pageName}`);
  };
  return (
    <button
      className="bg-slate-200 border-2 border-black rounded-full px-2 w-36"
      onClick={onClick}
    >
      {name}
    </button>
  );
};
