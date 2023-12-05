import axios from "axios";
import { useCallback } from "react";
import { PaintingStructure } from "../store/paintings/features/paintings/types";
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

  const deletePainting = useCallback(
    async (paintingId: string) => {
      dispatch(showLoadingActionCreator());

      const { data } = await axios.delete(`/paintings/${paintingId}`);

      dispatch(hideLoadingActionCreator());

      return data;
    },
    [dispatch],
  );

  return { getPaintingsApi, deletePainting };
};

export default usePaintingsApi;
