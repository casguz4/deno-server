import { getPage } from "../../services/pages.ts";

export default async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const { id } = params;

  if (!id) {
    response.status = 400;
    response.body = {
      msg: "Invalid user id. Please try again",
    };
    return;
  }

  const page = await getPage(id);

  if (!page) {
    response.status = 404;
    response.body = {
      msg: `Page with ID ${id} not found. Please try again`,
    };
    return;
  }

  response.body = page;
};
