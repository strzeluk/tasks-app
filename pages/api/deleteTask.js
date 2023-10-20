import { prisma } from "../../server/db/client";

export default async function handler(req, res) {
  const { id } = req.body;
  try {
    const deleteTask = await prisma.tasks.delete({
      where: {
        id,
      },
    });
    res.status(200).json(deleteTask);
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Something went wrong" });
  }
}
