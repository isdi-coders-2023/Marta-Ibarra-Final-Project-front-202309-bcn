import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  width: 100%;
  top: -79px;

  .loading__text {
    font-size: 1.5rem;
  }
`;

export default LoadingStyled;
