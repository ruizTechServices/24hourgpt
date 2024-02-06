// app/api/userAuth.tsx
import { auth } from "@clerk/nextjs";


export default function handler(res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { userId: string | null; }): void; new(): any; }; }; }) {
    // Your server-side authentication logic here
    const { userId } : { userId: string | null } = auth();
    res.status(200).json({ userId });
}
