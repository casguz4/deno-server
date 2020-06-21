import createUser from "./createUser.ts";
import getUserDetails from "./getUserDetails.ts";
import getUsers from "./getUsers.ts";
import deleteUser from "./deleteUser.ts";
import updateUser from "./updateUser.ts";

export default () => {
  return {
    CreateUser: createUser,
    DeleteUser: deleteUser,
    GetUserDetails: getUserDetails,
    GetUsers: getUsers,
    UpdateUser: updateUser,
  };
};
