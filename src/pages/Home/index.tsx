import coffeeImage from "../../assets/coffeeImage.png";
import { CoffeesSection, CoffeesShowcase, Grid, Introducement } from "./styles";
import cart from "../../assets/icons/cart.svg";
import clock from "../../assets/icons/clock.svg";
import coffeeCup from "../../assets/icons/coffeeCup.svg";
import pack from "../../assets/icons/pack.svg";
import coffesAvailable from "../../utils/coffeesAvailable.json";
import { CoffeCard } from "../../components/CoffeeCard";

export type CoffeData = {
  tittle: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
};

export const Home = () => {
  return (
    <>
      <Introducement>
        <div className="leftContent">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <Grid>
            <div className="iconAndText">
              <img src={cart} />
              <p>Compra simples e segura</p>
            </div>
            <div className="iconAndText">
              <img src={clock} />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="iconAndText">
              <img src={pack} />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="iconAndText">
              <img src={coffeeCup} />
              <p>O café chega fresquinho até você</p>
            </div>
          </Grid>
        </div>
        <div>
          <img src={coffeeImage} alt="" width="476px" />
        </div>
      </Introducement>
      <CoffeesSection>
        <h1>Nossos cafés</h1>
        <CoffeesShowcase>
          {coffesAvailable.coffeList.map((coffee) => {
            return <CoffeCard coffee={coffee} key={coffee.description} />;
          })}
        </CoffeesShowcase>
      </CoffeesSection>
    </>
  );
};
