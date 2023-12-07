import styled from "styled-components";

const PaintingsFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f5f5f5;
  font-family: Inter;
  font-size: 20px;
  font-style: italic;
  font-weight: 200;
  line-height: 24px;
  letter-spacing: 0em;
  padding: 10px;

  .form__input {
    width: 100%;
    padding: 5px;
  }

  .label {
    padding: 5px;
  }

  .dropdown {
    display: flex;
    width: 100%;
    padding: 5px;
  }

  .form__button {
    width: 110px;
    height: 73px;
  }
`;

export default PaintingsFormStyled;
