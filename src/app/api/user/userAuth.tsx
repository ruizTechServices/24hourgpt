// In userAuth.tsx
import { auth } from "@clerk/nextjs";

// This should be an API route handler in Next.js
export default async function handler(req, res) {
    // Your server-side authentication logic here
    const { userId } = await auth(req, res); // Make sure to pass req and res to auth
    res.status(200).json({ userId: userId || null }); // Send back null if userId is not available
}
