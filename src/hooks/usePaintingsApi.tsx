import axios from "axios";
import { useCallback } from "react";
import { PaintingStructure } from "../store/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/paintings/features/ui/uiSlice";

const usePaintingsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getPaintingsApi = useCallback(async () => {
    dispatch(showLoadingActionCreator());

    const { data: paintings } = await axios.get<{
      paintings: PaintingStructure[];
    }>("/paintings");

    dispatch(hideLoadingActionCreator());

    return paintings;
  }, [dispatch]);

  return { getPaintingsApi };
};

export default usePaintingsApi;
