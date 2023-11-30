import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import AppStyled from "./App.styled";
import Homepage from "../pages/Homepage.tsx/Homepage";

const App = (): React.ReactElement => {
  return (
    <>
      <AppStyled>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
