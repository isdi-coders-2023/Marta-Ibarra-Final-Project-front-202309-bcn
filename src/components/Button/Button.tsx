import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  size: "button__big" | "button__small";
  type: "submit" | "button";
  className: string;
  actionOnClick?: () => void;
}

const Button = ({
  text,
  size,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled onClick={actionOnClick}>
      <button className={`button ${size}`}>{text}</button>
    </ButtonStyled>
  );
};

export default Button;
