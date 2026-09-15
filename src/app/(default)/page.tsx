import {getUsers} from "../../api/dataSource";
import UserList from "./component/UserList";

type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
};

export default async function Home() {
  const users = await getUsers() as User[];

  return <UserList users={users} />
}
