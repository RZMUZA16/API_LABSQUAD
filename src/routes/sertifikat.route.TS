import {Hono }  from "hono";
import * as sertifikatController from "../controllers/sertifikat.controller";

export const sertifikatRoute = new Hono();

sertifikatRoute.get("/", sertifikatController.getAllSertifikat);
sertifikatRoute.get("/:id", sertifikatController.getSertifikatById);
sertifikatRoute.post("/", sertifikatController.uploadSertifikat);
sertifikatRoute.put("/:id", sertifikatController.updateSertifikat);
sertifikatRoute.delete("/:id", sertifikatController.deleteSertifikat);  