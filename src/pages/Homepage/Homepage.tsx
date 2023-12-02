import HomepageStyled from "./HomepageStyled";
import paintingsMock from "../../mocks/paintingsMock";
import { loadPaintingsActionCreator } from "../../store/paintings/paintingsSlice";
import PaintingsList from "../../components/PaintingsList/PaintingsList";
import { useAppDispatch } from "../../store/hooks";

const Homepage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  dispatch(loadPaintingsActionCreator(paintingsMock));

  return (
    <HomepageStyled>
      <h2 className="section-title">Homepage</h2>
      <PaintingsList />
    </HomepageStyled>
  );
};

export default Homepage;
