'use client'
// NextButton.tsx

import { NextButtonProps } from "../types";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NextButton: React.FC<NextButtonProps> = ({ pageName, name }) => {
  const pathname = usePathname();
  const active = pathname === `/${pageName}` ? "active" : "";

  return (
    <Link href={`/${pageName}`}>
        <button  className="bg-slate-200 border-2 border-black rounded-full px-2 w-36">{name}</button>
    </Link>
  );
};


