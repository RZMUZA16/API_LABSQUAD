import { Hono } from "hono";
import {
  getAllActivities,
  getActivitiesById,
  createActivities,
  updateActivities,
  deleteActivities,
} from "../controllers/activity.controllers.ts";

export const activityRoute = new Hono();

activityRoute.get("/", getAllActivities);

activityRoute.get("/:id", getActivitiesById);

activityRoute.post("/activity", createActivities);

activityRoute.post("/activity/:id", updateActivities);
activityRoute.delete("/delete_activity/:id", deleteActivities);
