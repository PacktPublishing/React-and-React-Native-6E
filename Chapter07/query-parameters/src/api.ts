const users = ["User 1", "User 2", "User 3"];

export type SortOrder = "asc" | "desc";

export function fetchUsers(order: SortOrder): Promise<string[]> {
  return new Promise((resolve) => {
    if (order === "desc") {
      resolve(users.slice(0).reverse());
    } else {
      resolve(users);
    }
  });
}
