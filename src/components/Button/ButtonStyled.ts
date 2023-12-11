import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 20px;
  border: solid 0.5px;

  .button__big {
    width: 110px;
    height: 73px;
    border-radius: 20px;
    border: 1px;
    margin: 5px;
  }
  .button__small {
    width: 95px;
    height: 48px;
    border-radius: 20px;
    border: 1px;
    padding: 5px;
  }

  &:disabled {
    font-weight: 500;
  }
`;

export default ButtonStyled;
