import { Hono } from "hono";
import { AktivitasgetAll,
         aktivitasgetdariId, 
         buataktivitas,
         updateaktivitas,
         deleteaktivias,
 } from "../controllers/activity.controllers.ts";

export const activityRoute = new Hono();

activityRoute.use("*,authMiddleware");


activityRoute.get("/", //roleMiddleware(['ADMIN']),
  AktivitasgetAll);    

activityRoute.get("/:id", //roleMiddleware(['MAHASISWA','ADMIN']),
  aktivitasgetdariId);    

activityRoute.post("/activity", //roleMiddleware(['ADMIN']),
  buataktivitas);    

activityRoute.post("/:id", //roleMiddleware(['ADMIN']),
  updateaktivitas);
activityRoute.delete("/:id", //roleMiddleware(['ADMIN']),
  deleteaktivias);


