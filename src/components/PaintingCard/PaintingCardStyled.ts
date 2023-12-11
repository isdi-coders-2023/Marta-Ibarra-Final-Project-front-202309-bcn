import styled from "styled-components";

const PaintingCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 20px;
  margin-top: 20px;
  box-shadow: #ededed 0px 0px 10px;
  overflow-wrap: anywhere;

  .card__painter {
    font-family: Inter;
    font-size: 20px;
    font-style: italic;
    font-weight: 200;
    line-height: 24px;
    text-align: center;
    padding: 15px;
  }

  .card__info {
    font-family: Inter;
    font-size: 20px;
    font-style: italic;
    font-weight: 200;
    line-height: 24px;
    text-align: center;
    padding: 20px;
  }

  .card__image {
    padding: 10px;
    width: 100%;
    object-fit: contain;
  }

  .card__button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px;
  }
`;

export default PaintingCardStyled;
