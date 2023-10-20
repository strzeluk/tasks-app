import { prisma } from "../../server/db/client";

export default async function handler(req, res) {
  const data = req.body;

  try {
    const result = await prisma.tasks.create({
      data: {
        ...data,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
