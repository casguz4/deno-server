import { createPage } from "../../services/pages.ts";

export default async (
  { request, response }: { request: any; response: any },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      msg: "Invalid page data",
    };

    return;
  }

  const { value } = await request.body();
  if (!value?.title || !value?.menuIndex) {
    response.status = 422;
    response.body = {
      msg: "Incorrect page data. Title and Menu Index are required",
    };

    return;
  }

  const { id, title } = await createPage(value);
  response.body = {
    msg: `Page created! Title: ${title}, Id: ${id}`,
  };
};
