"use client";

import { useContext } from "react";
import { NextButton } from "../components/button";
import { Order } from "../order";
import { SomeContext } from "../SomeContext";

export default function LoginPage() {
  const { value, toggleValue } = useContext(SomeContext);
  return (
    <div
      style={{
        height: 300,
        width: 300,
        backgroundColor: value === "light" ? "white" : "black",
      }}
    >
      <h1>Email</h1>
      {/* <Order nameType="email" />
            <h2>Enjoy</h2>
            <NextButton pageName="drinkstwo" name="Choose drink" /> */}
    </div>
  );
}
