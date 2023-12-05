import { http, HttpResponse } from "msw";
import paintingsMock from "./paintingsMock";

const urlApi = import.meta.env.VITE_API_URL;
const handler = [
  http.get(`${urlApi}/paintings`, () => {
    return HttpResponse.json({ paintings: paintingsMock });
  }),
  http.delete(`${urlApi}/paintings/:_id`, () => {
    return HttpResponse.json({});
  }),
];

export default handler;
