import {getUsers, users} from "../../api/dataSource";
import UserList from "./component/UserList";

type User = typeof users[number];

export default async function Home() {
  const users = await getUsers() as User[];

  return <UserList users={users} />
}
