import { Link, useNavigate } from "react-router-dom";
import usePaintingsApi from "../../hooks/usePaintingsApi";
import { useAppDispatch } from "../../store/hooks";
import {
  deletePaintingActionCreator,
  loadSelectedPaintingActionCreator,
} from "../../store/paintings/features/paintings/paintingsSlice";
import { PaintingStructure } from "../../store/paintings/features/paintings/types";
import Button from "../Button/Button";
import PaintingCardStyled from "./PaintingCardStyled";

interface PaintingCardProps {
  painting: PaintingStructure;
}

const PaintingCard = ({
  painting: { image, name, title, year, _id },
}: PaintingCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deletePainting, loadSelectedPainting } = usePaintingsApi();
  const navigate = useNavigate();

  const deletePaintingById = async (paintingId: string) => {
    await deletePainting(paintingId);
    dispatch(deletePaintingActionCreator(paintingId));
    scrollTo(0, 0);
  };

  const modifyPainting = async () => {
    const selectedPainting = await loadSelectedPainting(_id);

    dispatch(loadSelectedPaintingActionCreator(selectedPainting!));

    navigate(`/paintings/modify/${_id}`);
  };

  return (
    <PaintingCardStyled className="card">
      <h2 className="card__painter">{name}</h2>
      <Link to={`/paintings/${_id}`}>
        <img
          className="card__image"
          src={image}
          alt={title}
          width="280"
          height="345"
        />
      </Link>
      <span className="card__info">
        {title}, {year}
      </span>
      <div className="card__button-container">
        <Button
          text={"Edit info"}
          actionOnClick={modifyPainting}
          className={"button__small"}
          type={"button"}
        />
        <Button
          text={"Delete"}
          actionOnClick={() => {
            deletePaintingById(_id);
          }}
          type={"button"}
          className={"button__small"}
        />
      </div>
    </PaintingCardStyled>
  );
};

export default PaintingCard;
