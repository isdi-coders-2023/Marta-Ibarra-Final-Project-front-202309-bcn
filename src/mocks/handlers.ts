import { http, HttpResponse } from "msw";
import { jamelPaintingMock, paintingsMock } from "./paintingsMock";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/paintings`, () =>
    HttpResponse.json({ paintings: paintingsMock }),
  ),
  http.delete(`${urlApi}/paintings/:_id`, () => HttpResponse.json({})),

  http.post(`${urlApi}/paintings/add`, () =>
    HttpResponse.json({ painting: jamelPaintingMock }),
  ),
];

export const errorHandlers = [
  http.get(`${urlApi}/paintings`, async () => HttpResponse.error()),

  http.delete(`${urlApi}/paintings/:_id`, async () => HttpResponse.error()),

  http.post(`${urlApi}/paintings/add`, () => HttpResponse.error()),
];
