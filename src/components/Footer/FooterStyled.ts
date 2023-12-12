import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-size: 13px;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 3px;
  padding-left: 10px;
  gap: 10px;

  .footer__icon {
    display: flex;
    gap: 100px;
  }
`;

export default FooterStyled;
