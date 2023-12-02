import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  size: "button__big" | "button__small";
}

const Button = ({ text, size }: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled>
      <button className={`button ${size}`}>{text}</button>
    </ButtonStyled>
  );
};

export default Button;
