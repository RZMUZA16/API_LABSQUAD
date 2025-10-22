import {Hono} from "hono";
import { serve } from "bun";
import {studentRoute} from "./routes/student.route";
import {poinRoute} from "./routes/poin.route";
import {activityRoute} from "./routes/activity.route";
import {sertifikatRoute} from "./routes/sertifikat.route";
//import {authMiddleware} from "./middlewares/auth.middleware";
const app = new Hono();

app.get("/", (c) => c.json({message: "Welcome to LabSquad"}));
app.route("/api/students", studentRoute);
app.route("/api/poin", poinRoute);
app.route("/api/activity", activityRoute);
app.route("/api/sertifikat", sertifikatRoute);
const port = Number(process.env.PORT) || 3000;
console.log ('server berjalan di localhost:'+port);

serve({
  fetch: app.fetch,
  port,
});
