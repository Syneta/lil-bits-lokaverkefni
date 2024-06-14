"use client";

import { OrderType } from "./types";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Links } from "./components/nav-links";
import { createContext, useMemo, useState } from "react";
import { SomeContext } from "./SomeContext";
import { OrderContext } from "./ordercontext";

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
  const order = {
    drinks: [
      {
        brewer: "",
        category: "",
        description: "",
        id: "",
        imageSource: "",
        name: "",
        price: 1000,
      },
    ],
    email: "",
    count: 0,
    date: new Date(),
    dish: {
      id: "",
      category: "",
      cousine: "",
      description: "",
      imageSource: "",
      name: "",
      price: 2500,
    },
  };
  const [state, setState] = useState(order);

  const orderContext = useMemo(
    () => ({
      value: state,
      setValue: () => {
        setState((entireContext) => ({
          ...entireContext,
          dish: {
            id: "1",
            category: "main",
            cousine: "nigerian",
            description: "African dish",
            imageSource: "some image",
            name: "Jollof rice",
            price: 2500,
          },
        }));
      },
    }),
    [state]
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <Links />
        <main>
          <OrderContext.Provider value={orderContext}>
            {children}
          </OrderContext.Provider>
        </main>
      </body>
    </html>
  );
}

/* <SomeContext.Provider value={contextValue}>
            {children}
          </SomeContext.Provider>*/

/*  const contextValue = useMemo(
() => ({
value: state,
toggleValue: () => {
setState((s) => (s === "light" ? "dark" : "light"));
},
}),
[state]
); */