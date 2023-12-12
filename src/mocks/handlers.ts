import { http, HttpResponse } from "msw";
import {
  jamelPaintingMock,
  modifiedPaintingsMock,
  paintingsMock,
} from "./paintingsMock";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/paintings`, () => HttpResponse.json(paintingsMock)),
  http.delete(`${urlApi}/paintings/:_id`, () => HttpResponse.json({})),
  http.post(`${urlApi}/paintings/add`, () =>
    HttpResponse.json({ painting: jamelPaintingMock }),
  ),
  http.get(`${urlApi}/paintings/6564d0f8ab6e912be5400b17`, () =>
    HttpResponse.json({ painting: jamelPaintingMock }),
  ),
  http.patch(`${urlApi}/paintings/:_id/modify`, () =>
    HttpResponse.json({ painting: modifiedPaintingsMock }),
  ),
];

export const errorHandlers = [
  http.get(`${urlApi}/paintings`, async () => HttpResponse.error()),
  http.delete(`${urlApi}/paintings/:_id`, async () => HttpResponse.error()),
  http.post(`${urlApi}/paintings/add`, async () => HttpResponse.error()),
  http.get(`${urlApi}/paintings/:_id`, () => HttpResponse.error()),
  http.patch(`${urlApi}/paintings/:_id/modify`, () => HttpResponse.error()),
];
