import { Hono } from "hono";
import * as poinController from "../controllers/poin.controllers";

export const poinRoute = new Hono();

poinRoute.get("/", poinController.getAllPoin);
poinRoute.get("/:id", poinController.getPoinById);
poinRoute.post("/", poinController.createPoin);
poinRoute.put("/:id", poinController.updatePoin);
poinRoute.delete("/:id", poinController.deletePoin);
