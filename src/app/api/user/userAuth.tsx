import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from "@clerk/nextjs";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Your server-side authentication logic here
    // Before your auth call
    // @ts-ignore
    const { userId } = auth(req, res);
    res.status(200).json({ userId: userId || null }); // Send back null if userId is not available
}
