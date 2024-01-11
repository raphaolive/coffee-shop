import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContent } from "../styles";

const DefaultLayouts = () => {
  return (
    <div>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </div>
  );
};

export default DefaultLayouts;
