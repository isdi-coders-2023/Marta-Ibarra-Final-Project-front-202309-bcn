import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./Header.styled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <h1 className="header-title">La Galerie</h1>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
