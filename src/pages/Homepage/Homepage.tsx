import HomepageStyled from "./Homepage.styled";
import paintingsMock from "../../testUtils/paintingsMock";
import { loadPaintingsActionCreator } from "../../store/paintings/paintingsSlice";
import PaintingsList from "../../components/PaintingsList/PaintingsList";
import { useAppDispatch } from "../../store/hooks";

const Homepage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const currentPaintings = paintingsMock;
  dispatch(loadPaintingsActionCreator(currentPaintings));

  return (
    <HomepageStyled>
      <h2 className="section-title">Homepage</h2>
      <PaintingsList />
    </HomepageStyled>
  );
};

export default Homepage;
