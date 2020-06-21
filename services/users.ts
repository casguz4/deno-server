import { fetchData, persistData } from "./db.ts";
import { User } from "../models/user.ts";
import createId from "../services/createId.ts";

type UserData = Pick<User, "name" | "role" | "isAdmin">;

export const getUsers = async (): Promise<User[]> => {
  const users = await fetchData();

  return users.sort((a, b) => a.name.localeCompare(b.name));
};

export const getUser = async (userId: string): Promise<User | undefined> => {
  const users = await fetchData();

  return users.find(({ id }) => id === userId);
};

export const createUser = async (userData: UserData): Promise<string> => {
  const users = await fetchData();
  const userIds = users.map((user) => user.id);
  const newUser: User = {
    id: createId(userIds),
    name: String(userData.name),
    role: String(userData.role),
    isAdmin: "isAdmin" in userData ? Boolean(userData.isAdmin) : false,
    added: new Date(),
  };

  await persistData([...users, newUser]);

  return newUser.id;
};

export const updateUser = async (
  userId: string,
  userData: UserData,
): Promise<void> => {
  const user = await getUser(userId);

  if (!user) throw new Error("User not found");

  // Object.assign(user, userData);
  const updateUser = {
    ...user,
    name: userData.name !== undefined ? String(userData.name) : user.name,
    role: userData.role !== undefined ? String(userData.role) : user.role,
    jiraAdmin: userData.isAdmin !== undefined
      ? Boolean(userData.isAdmin)
      : user.isAdmin,
  };

  const users = await fetchData();
  const filteredUsers = users.filter((user) => user.id !== userId);

  persistData([...filteredUsers, updateUser]);
};

export const deleteUser = async (userId: string): Promise<void> => {
  const users = await getUsers();
  const filteredUsers = users.filter((user) => user.id !== userId);

  persistData(filteredUsers);
};
