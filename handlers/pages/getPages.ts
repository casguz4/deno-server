import { getPages } from "../../services/pages.ts";

export default async ({ response }: { response: any }) => {
  response.body = await getPages();
};
