"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Links } from "./components/nav-links";
import { createContext, useMemo, useState } from "react";
import { SomeContext } from "./SomeContext";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Lil bits restaurant",
  description: "Lil bits restaurant page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, setState] = useState("light");

  const contextValue = useMemo(
    () => ({
      value: state,
      toggleValue: () => {
        setState((s) => (s === "light" ? "dark" : "light"));
      },
    }),
    [state]
  );

  const order = {
    id: "some-id",
    meal: {
      name: "name",
      image: "some image",
      price: 3000,
    },
    drinks: [
      {
        id: "some=drink-id",
        name: "beer",
      },
      {
        id: "some=drink-id-2",
        name: "wine",
      },
    ],
    // date: new Date(),
    // customerCount: 10,
  };

  // const exampleStuff = useMemo(
  //   () => ({
  //     value: state,
  //     toggleValue: () => {
  //       setState((entireContext) => ({
  //         ...entireContext,
  //         dish: {
  //           // dish
  //         },
  //       }));
  //     },
  //   }),
  //   [state]
  // );

  return (
    <html lang="en">
      <body className={inter.className}>
        <Links />
        <main>
          <SomeContext.Provider value={contextValue}>
            {children}
          </SomeContext.Provider>
        </main>
      </body>
    </html>
  );
}
