import { Hono } from "hono";
import * as poinController from "../controllers/poin.controllers";

export const poinRoute = new Hono();

poinRoute.get("/", poinController.getAllPoin);
poinRoute.get("/:id", poinController.getPoinById);
poinRoute.post("/poin", poinController.createPoin);
poinRoute.put("/poin/:id", poinController.updatePoin);
poinRoute.delete("/delete_poin/:id", poinController.deletePoin);
