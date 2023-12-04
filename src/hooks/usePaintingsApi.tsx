import axios from "axios";
import { useCallback } from "react";
import { PaintingStructure } from "../store/types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const usePaintingsApi = () => {
  const getPaintingsApi = useCallback(async () => {
    const { data: paintings } = await axios.get<{
      paintings: PaintingStructure[];
    }>("/paintings");

    return paintings;
  }, []);

  return { getPaintingsApi };
};

export default usePaintingsApi;
