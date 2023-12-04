import styled from "styled-components";

const LoadingStyled = styled.div`
  z-index: 3;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #00000080;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;

  .loading__text {
    font-size: 1.5rem;
  }
`;

export default LoadingStyled;
