import { useDispatch } from "react-redux";
import HomepageStyled from "./Homepage.styled";
import paintingsMock from "../../testUtils/paintingsMock";
import { loadPaintingsActionCreator } from "../../store/paintings/paintingsSlice";

const Homepage = (): React.ReactElement => {
  const dispatch = useDispatch();

  const currentPaintings = paintingsMock;
  dispatch(loadPaintingsActionCreator(currentPaintings));

  return (
    <HomepageStyled>
      <h2 className="section-title">Homepage</h2>
    </HomepageStyled>
  );
};

export default Homepage;
