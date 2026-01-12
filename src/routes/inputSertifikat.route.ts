import {  Hono } from "hono";
import {
  getAllInputSertifikats,
  getInputSertifikatById,
  createInputSertifikat,
  updateInputSertifikat,
  deleteInputSertifikat,
} from "../controllers/inputSertifikat.controllers";

export const inputSertifikatRoute = new Hono();

inputSertifikatRoute.get("/", getAllInputSertifikats);
inputSertifikatRoute.get("/:id", getInputSertifikatById);
inputSertifikatRoute.post("/input_sertifikat", createInputSertifikat);  
inputSertifikatRoute.post("/input_sertifikat/:id", updateInputSertifikat);
inputSertifikatRoute.delete("/delete_input_sertifikat/:id", deleteInputSertifikat);
  