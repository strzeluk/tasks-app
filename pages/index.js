import Head from "next/head";

import { Container } from "react-bootstrap";
import TaskList from "@/components/TaskList";
import Header from "@/components/UI/Header";
import { prisma } from "../server/db/client";

export default function Home({ tasks }) {
  return (
    <>
      <Head>
        <title>Task Management App</title>
        <meta name="description" content="My first Next.js app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/21e0648876.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Header />
      <Container>
        <TaskList tasks={tasks} />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const tasks = await prisma.tasks.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return {
    props: {
      tasks: JSON.parse(JSON.stringify(tasks)),
    },
  };
}
