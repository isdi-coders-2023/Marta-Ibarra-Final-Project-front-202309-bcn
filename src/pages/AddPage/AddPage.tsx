import PaintingsForm from "../../components/Form/PaintingsForm";
import AddPageStyled from "./AddPageStyled";

const AddPage = (): React.ReactElement => {
  return (
    <AddPageStyled>
      <h2 className="page-title">Add a new Artwork</h2>
      <PaintingsForm />
    </AddPageStyled>
  );
};

export default AddPage;
