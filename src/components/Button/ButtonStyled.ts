import styled from "styled-components";

const ButtonStyled = styled.div`
  border-radius: 20px;
  border: solid 0.5px;
  border-color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: italic;
  font-weight: 200;
  line-height: 24px;
  text-align: center;

  .button {
    &__small {
      width: 95px;
      height: 48px;
      border-radius: 20px;
      border: 1px;
      padding: 5px;
    }

    &__big {
      width: 110px;
      height: 73px;
      top: -631px;
      left: 751px;
      border-radius: 20px;
      border: 1px;
      margin: 5px;
    }
  }
`;

export default ButtonStyled;
