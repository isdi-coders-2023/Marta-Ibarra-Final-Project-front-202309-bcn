import { http, HttpResponse } from "msw";
import paintingsMock from "./paintingsMock";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/paintings`, () => {
    return HttpResponse.json({ paintings: paintingsMock });
  }),
  http.delete(`${urlApi}/paintings/:_id`, () => {
    return HttpResponse.json({});
  }),
];

export const errorHandlers = [
  http.get(`${urlApi}/paintings`, async () => {
    return HttpResponse.error();
  }),
  http.delete(`${urlApi}/paintings/:_id`, async () => {
    return HttpResponse.error();
  }),
];
