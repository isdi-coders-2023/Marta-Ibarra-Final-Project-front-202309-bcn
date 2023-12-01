import { PaintingStructure } from "../../store/types";
import PaintingCardStyled from "./PaintingCardStyled";

interface PaintingCardProps {
  painting: PaintingStructure;
}

const PaintingCard = ({
  painting: { image, name, title, year },
}: PaintingCardProps): React.ReactElement => {
  return (
    <PaintingCardStyled className="card">
      <h2 className="card__painter">{name}</h2>
      <img
        className="card__image"
        src={image}
        alt={title}
        width="280"
        height="345"
      />
      <span className="card__info">
        {title}, {year}
      </span>
    </PaintingCardStyled>
  );
};

export default PaintingCard;
