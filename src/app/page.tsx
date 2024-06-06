import Image from "next/image";
import OrderComponent from "./order";
import { RenderDish, RenderDrink } from "./api";
import { HeaderComponent } from "./components";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        
  
          <Carousel>
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          </Carousel>        
      </div>

  )
}
