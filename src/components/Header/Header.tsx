import HeaderStyled from "./Header.styled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <h1 className="header-title">La Galerie</h1>
    </HeaderStyled>
  );
};

export default Header;
