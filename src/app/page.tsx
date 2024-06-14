"use client";
import Image from "next/image";
import { HeaderComponent } from "./components";
import Carousel from "./components/carousel/carousel";
import { NextButton } from "./components/button";
import { Overview } from "./overview";
import { useContext } from "react";
import { SomeContext } from "./SomeContext";

export default function Home() {
  const { value, toggleValue } = useContext(SomeContext);

  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
        // backgroundColor: theme.value === "light" ? "white" : "black",
        backgroundColor: value === "light" ? "white" : "black",
      }}
    >
      <button onClick={toggleValue}>Toggle</button>
      <NextButton pageName="login" name="Start Order" />
      <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>
    </div>
  );
}
