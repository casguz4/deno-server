import { updateUser } from "../../services/users.ts";

export default async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const userId = params.id;

  if (!userId) {
    response.status = 400;
    response.body = { msg: "Invalid user id" };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  const {
    value: { name, role, isAdmin },
  } = await request.body();

  await updateUser(userId, { name, role, isAdmin });

  response.body = { msg: `User with id: ${userId} has been updated` };
};
