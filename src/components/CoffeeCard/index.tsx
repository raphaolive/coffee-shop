import { ShoppingCart } from "phosphor-react";
import { CoffeData } from "../../pages/Home";
import { CoffeeContainer } from "./styles";

type Props = {
  coffee: CoffeData;
};

export const CoffeCard = ({ coffee }: Props) => {
  return (
    <CoffeeContainer>
      <img src={coffee.image} alt="coffee-image" width="120px" height="120px" />
      <div className="tags">
        {coffee.tags.map((tag) => {
          return <span className="tag">{tag}</span>;
        })}
      </div>
      <h1>{coffee.tittle}</h1>
      <p className="description">{coffee.description}</p>
      <div className="shopActions">
        <div className="priceAndCurrency">
          <p className="currency">R$</p>
          <p className="price">{coffee.price}</p>
        </div>
        <div className="actions">
          <div className="minusOrMore">
            <button>&minus;</button>
            <span className="amount">1</span>
            <button>&#43;</button>
          </div>
          <ShoppingCart size={32} weight="fill" />
        </div>
      </div>
    </CoffeeContainer>
  );
};
