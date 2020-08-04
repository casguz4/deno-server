import { Router } from "https://deno.land/x/oak/mod.ts";
import UserHandler from "./handlers/user/index.ts";
import PageHandler from "./handlers/pages/index.ts";

const {
  CreateUser,
  DeleteUser,
  GetUserDetails,
  GetUsers,
  UpdateUser,
} = UserHandler();
const {
  CreatePage,
  // DeletePage,
  GetPageDetails,
  GetPages,
  // UpdatePage,
} = PageHandler();
const router = new Router();

router
  .get("/users", GetUsers)
  .get("/users/:id", GetUserDetails)
  .post("/users", CreateUser)
  .put("/users/:id", UpdateUser)
  .delete("/users/:id", DeleteUser)
  //pages
  .get("/pages", GetPages)
  .get("/pages/:id", GetPageDetails)
  .post("/pages", CreatePage);
// .put("/users/:id", UpdatePage)
// .delete("/pages/:id", DeletePage);

export default router;
