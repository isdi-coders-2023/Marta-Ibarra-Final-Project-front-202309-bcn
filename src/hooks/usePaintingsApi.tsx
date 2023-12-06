import { toast } from "react-toastify";
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
    try {
      dispatch(showLoadingActionCreator());

      const { data: paintings } = await axios.get<{
        paintings: PaintingStructure[];
      }>("/paintings");

      dispatch(hideLoadingActionCreator());

      return paintings;
    } catch {
      dispatch(hideLoadingActionCreator());

      toast.error("Something went wrong, please try again", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast toast--error",
      });
    }
  }, [dispatch]);

  const deletePainting = useCallback(
    async (paintingId: string): Promise<void> => {
      dispatch(showLoadingActionCreator());

      try {
        const { data } = await axios.delete(`/paintings/${paintingId}`);
        dispatch(hideLoadingActionCreator());
        toast.success("Painting deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast toast--confirmation",
        });

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());
        toast.error("Something went wrong, please try again", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast toast--error",
        });
      }
    },
    [dispatch],
  );

  return { getPaintingsApi, deletePainting };
};

export default usePaintingsApi;
