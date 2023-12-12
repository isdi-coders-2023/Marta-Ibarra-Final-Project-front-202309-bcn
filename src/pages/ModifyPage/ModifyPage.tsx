import PaintingsForm from "../../components/Form/PaintingsForm";
import usePaintingsApi from "../../hooks/usePaintingsApi";
import { PaintingWithoutId } from "../../store/paintings/features/paintings/types";
import ModifyPageStyled from "./ModifyPageStyled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { modifyPaintingActionCreator } from "../../store/paintings/features/paintings/paintingsSlice";

const ModifyPage = (): React.ReactElement => {
  const { modifyPainting } = usePaintingsApi();
  const { selectedPainting } = useAppSelector((state) => state.paintingsState);
  const dispatch = useAppDispatch();

  const updatePainting = async (painting: PaintingWithoutId) => {
    const updatePainting = await modifyPainting(selectedPainting._id, painting);

    dispatch(modifyPaintingActionCreator(updatePainting!));
  };

  return (
    <ModifyPageStyled>
      <h2 className="page__title">Modify Form</h2>
      <PaintingsForm
        submitAction={updatePainting}
        selectedPainting={selectedPainting}
        buttonText="Edit info"
      />
    </ModifyPageStyled>
  );
};

export default ModifyPage;
