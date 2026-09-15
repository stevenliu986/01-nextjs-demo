'use client';

type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
};

// 注意组件接收的 props 类型是 User[]，所以在定义组件时需要指定 props 的类型为 { users: User[] }。当时报错是因为在声明该参数的时候直接是（users： User[]）而不是 { users }: { users: User[] }。
export default function UserList({users}: { users: User[] }) {

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.gender}</p>
            <p>{user.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
