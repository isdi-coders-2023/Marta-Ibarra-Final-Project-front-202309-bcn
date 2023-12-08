import styled from "styled-components";

const NavigationStyled = styled.nav`
  width: 100%;

  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
  }

  @media (min-width: 412px) {
    width: 360px;
  }

  .active {
    text-decoration: underline;
  }
`;

export default NavigationStyled;
