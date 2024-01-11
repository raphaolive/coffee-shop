import { Headercontainer } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Headercontainer>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Porto alegre, RS
        </span>
        <NavLink to="/">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </NavLink>
      </nav>
    </Headercontainer>
  );
};
