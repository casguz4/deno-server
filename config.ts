const env = Deno.env.toObject();
export const APP_HOST = env.HOST || "localhost";
export const APP_PORT = env.PORT || 7700;
export const DB_USERS = "./db/users.json";
export const DB_PAGES = "./db/pages.json";
