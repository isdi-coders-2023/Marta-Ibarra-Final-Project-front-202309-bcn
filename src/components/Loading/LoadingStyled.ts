import styled from "styled-components";

const LoadingStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;

  .loading__text {
    font-size: 1.5rem;
  }
`;

export default LoadingStyled;
