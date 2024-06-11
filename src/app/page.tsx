import Image from "next/image";
import OrderComponent from "./order";
import { RenderDish, RenderDrink } from "./components/server/api";
import { HeaderComponent } from "./components";
import Carousel from "./components/carousel/carousel";
import { NextButton } from "./components/button";
import { Overview } from "./overview";

export default function Home() {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <NextButton pageName="loginone" name="Login" />
      <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>
    </div>

  )
}
