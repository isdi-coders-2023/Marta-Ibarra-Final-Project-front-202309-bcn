import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import AppStyled from "./App.styled";

const App = (): React.ReactElement => {
  return (
    <>
      <AppStyled>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
