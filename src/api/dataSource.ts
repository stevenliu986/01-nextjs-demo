const users = [
    { "id": 1, "name": "Alice", "email": "alice@example.com", "gender": "female", "age": 25 },
    { "id": 2, "name": "Bob", "email": "bob@example.com", "gender": "male", "age": 30 },
    { "id": 3, "name": "Charlie", "email": "charlie@example.com", "gender": "male", "age": 22 },
    { "id": 4, "name": "Diana", "email": "diana@example.com", "gender": "female", "age": 28 },
    { "id": 5, "name": "Ethan", "email": "ethan@example.com", "gender": "male", "age": 35 },
    { "id": 6, "name": "Fiona", "email": "fiona@example.com", "gender": "female", "age": 27 },
    { "id": 7, "name": "George", "email": "george@example.com", "gender": "male", "age": 31 },
    { "id": 8, "name": "Hannah", "email": "hannah@example.com", "gender": "female", "age": 24 },
    { "id": 9, "name": "Ian", "email": "ian@example.com", "gender": "male", "age": 29 },
    { "id": 10, "name": "Julia", "email": "julia@example.com", "gender": "female", "age": 26 },
    { "id": 11, "name": "Kevin", "email": "kevin@example.com", "gender": "male", "age": 33 },
    { "id": 12, "name": "Laura", "email": "laura@example.com", "gender": "female", "age": 23 },
    { "id": 13, "name": "Michael", "email": "michael@example.com", "gender": "male", "age": 38 },
    { "id": 14, "name": "Nina", "email": "nina@example.com", "gender": "female", "age": 21 },
    { "id": 15, "name": "Oscar", "email": "oscar@example.com", "gender": "male", "age": 32 },
    { "id": 16, "name": "Paula", "email": "paula@example.com", "gender": "female", "age": 29 },
    { "id": 17, "name": "Quentin", "email": "quentin@example.com", "gender": "male", "age": 27 },
    { "id": 18, "name": "Rachel", "email": "rachel@example.com", "gender": "female", "age": 34 },
    { "id": 19, "name": "Samuel", "email": "samuel@example.com", "gender": "male", "age": 26 },
    { "id": 20, "name": "Tina", "email": "tina@example.com", "gender": "female", "age": 22 },
    { "id": 21, "name": "Ulysses", "email": "ulysses@example.com", "gender": "male", "age": 40 },
    { "id": 22, "name": "Vera", "email": "vera@example.com", "gender": "female", "age": 30 },
    { "id": 23, "name": "William", "email": "william@example.com", "gender": "male", "age": 36 },
    { "id": 24, "name": "Xenia", "email": "xenia@example.com", "gender": "female", "age": 25 },
    { "id": 25, "name": "Yves", "email": "yves@example.com", "gender": "male", "age": 28 },
    { "id": 26, "name": "Zoe", "email": "zoe@example.com", "gender": "female", "age": 23 },
    { "id": 27, "name": "Adam", "email": "adam@example.com", "gender": "male", "age": 31 },
    { "id": 28, "name": "Bella", "email": "bella@example.com", "gender": "female", "age": 27 },
    { "id": 29, "name": "Carter", "email": "carter@example.com", "gender": "male", "age": 29 },
    { "id": 30, "name": "Daisy", "email": "daisy@example.com", "gender": "female", "age": 24 }
] as const;

export function getUsers(): Promise<typeof users> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 2000);
    })
}