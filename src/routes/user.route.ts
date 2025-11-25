import { Hono } from "hono";
import {
  usergetAll,
  usergetdariId,
  usercreate,
  userupdate,
  userdelete,
} from "../controllers/user.controller";

const userRoutes = new Hono();
export const userRoute = userRoutes;

userRoute.get("/", usergetAll);
userRoute.get("/:id", usergetdariId);
userRoute.post("/users", usercreate);
userRoute.put("/users/:id", userupdate);
userRoute.delete("/delete_users/:id", userdelete);

//)
export default userRoute;
