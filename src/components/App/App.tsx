import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import Homepage from "../../pages/Homepage/Homepage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import AddPage from "../../pages/AddPage/AddPage";
import DetailPage from "../../pages/DetailPage/DetailPage";
import Footer from "../Footer/Footer";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <AppStyled>
      <Header />
      <ToastContainer />
      {uiState.isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/paintings/:paintingId" element={<DetailPage />} />
      </Routes>
      <Footer />
    </AppStyled>
  );
};

export default App;
