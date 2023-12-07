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
  type,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled onClick={actionOnClick}>
      <button className={`button ${size}`} type={type}>
        {text}
      </button>
    </ButtonStyled>
  );
};

export default Button;
