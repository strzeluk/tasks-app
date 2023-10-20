import { Button } from "react-bootstrap";
import TaskItem from "./TaskItem";
import { prisma } from "../server/db/client";

const TaskList = ({ tasks }) => {
  console.log(tasks);

  return (
    <div className="card-hover-shadow-2x mb-3 card">
      <div className="card-header-tab card-header">
        <div className="d-flex justify-content-between">
          <div>
            <i className="fa-solid fa-list-check me-3"></i>
            Your task
          </div>
          <Button className="btn btn-sm">
            <i className="fa-solid fa-plus me-2"></i>Add new task
          </Button>
        </div>
      </div>
      <ul className="list-group">
        {tasks?.map((task) => (
          <li>{task.title}</li>
          // <TaskItem
          //   key={i}
          //   id={task.id}
          //   title={task.title}
          //   content={task.content}
          //   createdAt={task.createdAt}
          // />
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const tasks = await prisma.task.findMany();
  return {
    props: {
      tasks: JSON.parse(JSON.stringify(tasks)),
    },
  };
}

export default TaskList;
