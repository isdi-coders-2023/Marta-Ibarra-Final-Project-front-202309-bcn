import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  className: "button__big" | "button__small";
  type: "submit" | "button";
  actionOnClick?: () => void;
}

const Button = ({
  text,
  className,
  type,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled onClick={actionOnClick} className={className} type={type}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
