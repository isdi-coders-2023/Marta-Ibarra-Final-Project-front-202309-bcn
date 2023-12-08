import PaintingsForm from "../../components/Form/PaintingsForm";
import usePaintingsApi from "../../hooks/usePaintingsApi";
import { PaintingStructure } from "../../store/paintings/features/paintings/types";
import AddPageStyled from "./AddPageStyled";

const AddPage = (): React.ReactElement => {
  const { addnewPainting } = usePaintingsApi();

  const addCurrentPainting = (newPainting: PaintingStructure) => {
    addnewPainting(newPainting);
  };

  return (
    <AddPageStyled>
      <h2 className="page-title">Add a new Artwork</h2>
      <PaintingsForm submitAction={addCurrentPainting} />
    </AddPageStyled>
  );
};

export default AddPage;
