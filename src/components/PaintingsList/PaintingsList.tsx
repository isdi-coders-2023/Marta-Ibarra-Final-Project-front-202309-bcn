import { useAppSelector } from "../../store/hooks";
import PaintingCard from "../PaintingCard/PaintingCard";
import PaintingsListStyled from "./PaintingsListStyled";

const PaintingsList = (): React.ReactElement => {
  const paintings = useAppSelector((state) => state.paintingsState.paintings);

  return (
    <PaintingsListStyled>
      {paintings.map((painting) => (
        <li key={painting._id}>
          <PaintingCard painting={painting} />
        </li>
      ))}
    </PaintingsListStyled>
  );
};

export default PaintingsList;
