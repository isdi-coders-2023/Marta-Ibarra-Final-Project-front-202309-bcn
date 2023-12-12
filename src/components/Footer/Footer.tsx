import FooterStyled from "./FooterStyled";

const Footer = (): React.ReactElement => {
  return (
    <FooterStyled>
      <span>B-art inc, all rights reserved</span>
      <div className="footer_icon">
        <a target="_blank" href="https://www.instagram.com">
          <img
            src="/images/instagram-icon.png"
            alt="instagram logo with link"
            width="23"
            height="15"
          />
        </a>
        <a target="_blank" href="https://www.twitter.com">
          <img
            src="/images/twitter-icon.png"
            alt="twitter logo with link"
            width="27"
            height="17"
          />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
