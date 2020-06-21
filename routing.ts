import { Router } from "https://deno.land/x/oak/mod.ts";
import UserHandler from "./handlers/user/index.ts";
// import getUsers from "./handlers/getUsers.ts";
// import getUserDetails from "./handlers/getUserDetails.ts";
// import createUser from "./handlers/createUser.ts";
// import updateUser from "./handlers/updateUser.ts";
// import deleteUser from "./handlers/deleteUser.ts";
const {
  CreateUser,
  DeleteUser,
  GetUserDetails,
  GetUsers,
  UpdateUser,
} = UserHandler();
const router = new Router();

router
  .get("/users", GetUsers)
  .get("/users/:id", GetUserDetails)
  .post("/users", CreateUser)
  .put("/users/:id", UpdateUser)
  .delete("/users/:id", DeleteUser);

export default router;
