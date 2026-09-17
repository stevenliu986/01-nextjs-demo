import { Card, CardContent } from "@/components/ui/card";

export default function User({ user }: { user: { id: number; name: string; email: string; gender: string; age: number } }) {
    return (
        <Card className="w-96">
            <CardContent>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Gender: {user.gender}</p>
                <p>Age: {user.age}</p>
            </CardContent>
        </Card>
    );
}