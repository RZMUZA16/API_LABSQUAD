import {Hono }  from "hono";
import * as sertifikatController from "../controllers/sertifikat.controller";

export const sertifikatRoute = new Hono();

sertifikatRoute.get("/", sertifikatController.getAllSertifikat);
sertifikatRoute.get("/:id", sertifikatController.getSertifikatById);
sertifikatRoute.post("/sertifikat", sertifikatController.uploadSertifikat);
sertifikatRoute.put("/sertifikat/:id", sertifikatController.updateSertifikat);
sertifikatRoute.delete("/delete_sertifikat/:id", sertifikatController.deleteSertifikat);  