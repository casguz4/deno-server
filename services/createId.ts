import { v4 as uuid } from "https://deno.land/std/uuid/mod.ts";

export default (userIds: string[]): string => {
  console.log("userIds", userIds);
  if (!(userIds.length > 0)) return "1";
  const ids = userIds.map((id) => parseInt(id));
  return `${Math.max(...ids) + 1}`;
};
