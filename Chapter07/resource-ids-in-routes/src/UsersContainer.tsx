import { useState, useEffect } from "react";
import Users from "./Users";
import { type User, fetchUsers } from "./api";

function UsersContainer() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return <Users users={users} />;
}

export default UsersContainer;
