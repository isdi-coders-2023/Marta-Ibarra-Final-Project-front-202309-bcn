import axios from "axios";
import { useCallback } from "react";
import { PaintingStructure } from "../store/types";

const usePaintingsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getPaintingsApi = useCallback(async () => {
    const { data: paintings } = await axios.get<{
      paintings: PaintingStructure[];
    }>("/paintings");

    return paintings;
  }, []);

  return { getPaintingsApi };
};

export default usePaintingsApi;
