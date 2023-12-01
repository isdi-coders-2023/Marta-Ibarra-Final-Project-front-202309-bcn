import HomepageStyled from "./Homepage.styled";
import paintingsMock from "../../testUtils/paintingsMock";
import { loadPaintingsActionCreator } from "../../store/paintings/paintingsSlice";
import { useAppDispatch } from "../../store/hooks";

const Homepage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const currentPaintings = paintingsMock;
  dispatch(loadPaintingsActionCreator(currentPaintings));

  return (
    <HomepageStyled>
      <h2 className="section-title">Homepage</h2>
    </HomepageStyled>
  );
};

export default Homepage;
