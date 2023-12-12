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
    padding: 8px;
  }

  .form__textarea {
    resize: none;
  }

  .label {
    padding: 5px;
  }

  .dropdown {
    display: flex;
    width: 100%;
    padding: 5px;
  }

  .button__container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .button__big {
    width: 110px;
    height: 73px;
    border-radius: 20px;
    margin: 5px;
    border: solid 0.5px;
  }
`;

export default PaintingsFormStyled;
