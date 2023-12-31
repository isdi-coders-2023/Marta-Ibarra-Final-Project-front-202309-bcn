import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
