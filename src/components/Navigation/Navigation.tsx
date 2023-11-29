import { NavLink } from "react-router-dom";
import NavigationStyled from "./Navigation.Styled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li className="navigation-home">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navigation-add">
          <NavLink to="/">Add</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
