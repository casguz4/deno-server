import { getUser } from "../../services/users.ts";

export default async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const userId = params.id;

  if (!userId) {
    response.status = 400;
    response.body = {
      msg: "Invalid user id. Please try again",
    };
    return;
  }

  const foundUser = await getUser(userId);

  if (!foundUser) {
    response.status = 404;
    response.body = {
      msg: `User with ID ${userId} not found. Please try again`,
    };

    return;
  }

  response.body = foundUser;
};
