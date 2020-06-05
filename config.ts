const env = Deno.env.toObject();
export const APP_HOST = env.HOST || "localhost";
export const APP_PORT = env.PORT || 7700;
export const DB_PATH = "./db/users.json";
