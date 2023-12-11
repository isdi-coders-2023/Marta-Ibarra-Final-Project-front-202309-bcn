import FooterStyled from "./FooterStyled";

const Footer = (): React.ReactElement => {
  return (
    <FooterStyled>
      <span>B-art inc, all rights reserved</span>
      <a target="_blank" href="https://www.instagram.com">
        <img src="/public/images/instagram-icon.png" alt="" />
      </a>
      <a target="_blank" href="https://www.twitter.com">
        <img src="/public/images/twitter-icon.png" alt="" />
      </a>
    </FooterStyled>
  );
};

export default Footer;
