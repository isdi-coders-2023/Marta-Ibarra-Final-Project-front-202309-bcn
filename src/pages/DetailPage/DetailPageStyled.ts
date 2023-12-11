import styled from "styled-components";

const DetailPageStyled = styled.div`
  overflow-wrap: anywhere;

  .detail__component {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .detail__name {
    font-size: 20px;
    font-weight: 200;
    padding: 10px;
  }

  .detail__image {
    object-fit: contain;
  }

  .detail__painting {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .detail__author {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .detail__title {
    font-size: 18px;
    padding: 10px;
  }

  .detail__year {
  }

  .detail__image-description {
    font-size: 18px;
    padding: 10px;
  }

  .detail__price {
    font-size: 18px;
    font-style: italic;
    padding: 15px;
    width: 100%;
  }

  .detail__author-about {
    font-size: 18px;
    padding: 10px;
  }

  .detail__author-description {
    font-size: 18px;
    padding: 10px;
  }
`;

export default DetailPageStyled;
