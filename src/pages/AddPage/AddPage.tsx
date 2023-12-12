import PaintingsForm from "../../components/Form/PaintingsForm";
import usePaintingsApi from "../../hooks/usePaintingsApi";
import AddPageStyled from "./AddPageStyled";

const AddPage = (): React.ReactElement => {
  const { addnewPainting } = usePaintingsApi();

  return (
    <AddPageStyled>
      <h2 className="page-title">Add a new Artwork</h2>
      <PaintingsForm submitAction={addnewPainting} buttonText="Add" />
    </AddPageStyled>
  );
};

export default AddPage;
