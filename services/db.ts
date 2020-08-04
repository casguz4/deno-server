import { DB_USERS, DB_PAGES } from "../config.ts";
// import { User } from "../models/user.ts";

// export const fetchData = async (): Promise<User[]> => {
//   const data = await Deno.readFile(DB_USERS);

//   const decoder = new TextDecoder();
//   const decodeData = decoder.decode(data);

//   return JSON.parse(decodeData);
// };

export const persistData = async (path: string, data: any): Promise<void> => {
  const encoder = new TextEncoder();
  await Deno.writeFile(path, encoder.encode(JSON.stringify(data)));
};

export const fetchData = async (path: string): Promise<any[]> => {
  const data = await Deno.readFile(path);

  const decoder = new TextDecoder();
  const decodeData = decoder.decode(data);

  return JSON.parse(decodeData);
};
