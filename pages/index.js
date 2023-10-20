import Head from "next/head";
import { Container } from "react-bootstrap";
import TaskList from "@/components/TaskList";
import Header from "@/components/UI/Header";

export default function Home() {
  const DUMMY_TAKS = [
    {
      id: 1,
      title: "Fist task",
      content:
        "Consequat nisi est enim quis nostrud labore ea excepteur sunt fugiat. Laboris cillum magna elit labore pariatur duis veniam quis. Ipsum ipsum aute cillum ut do velit velit laborum. Mollit adipisicing occaecat fugiat aliquip eu minim dolore voluptate. Nulla elit qui est aute excepteur anim esse. Exercitation et voluptate proident laboris pariatur ad sit aliqua id.",
      createdAt: "",
      modifiedAt: "",
    },
    {
      id: 2,
      title: "Second task",
      content: "Some text",
      createdAt: "",
      modifiedAt: "",
    },
    {
      id: 3,
      title: "Third task",
      content: "Some text",
      createdAt: "",
      modifiedAt: "",
    },
    {
      id: 4,
      title: "Fourth task",
      content: "Some text",
      createdAt: "",
      modifiedAt: "",
    },
  ];

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
        <TaskList />
      </Container>
    </>
  );
}
