import {Hono} from "hono";
import { serve } from "bun";
const app = new Hono();

app.get("/", (c) => c.json({message: "Welcome to LabSquad"}));


const port = Number(process.env.PORT) || 3000;
console.log ('server berjalaan di localhost:'+port);

serve({
  fetch: app.fetch,
  port,
});
