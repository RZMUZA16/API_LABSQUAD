import { Hono } from "hono";
import { getActivityById,
         getAllActivities, 
         createActivity,
         updateActivity
 } from "../controllers/activity.controllers.ts";
const router = new Hono();
export const activityRoute = router;

router.use("*,authMiddleware");

router.get("/activities", //roleMiddleware(['ADMIN']),
  getAllActivities);    
router.get("/activities/:id", //roleMiddleware(['MAHASISWA','ADMIN']),
  getActivityById);    
router.post("/activities", //roleMiddleware(['ADMIN']),
  createActivity);    
router.put("/activities/:id", //roleMiddleware(['ADMIN']),
  updateActivity);


