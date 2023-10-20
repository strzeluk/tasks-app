import { Button } from "react-bootstrap";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { useState } from "react";

const TaskList = (props) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const { tasks } = props;

  const buttonHandler = () => {
    setShowAddTaskModal((prevState) => !prevState);
  };

  return (
    <div className="card-hover-shadow-2x mb-3 card">
      <div className="card-header-tab card-header">
        <div className="d-flex justify-content-between">
          <div>
            <i className="fa-solid fa-list-check me-3"></i>
            Your task
          </div>
          <Button className="btn btn-sm" onClick={buttonHandler}>
            <i className="fa-solid fa-plus me-2"></i>Add new task
          </Button>
        </div>
      </div>
      <ul className="list-group">
        {tasks?.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
      {showAddTaskModal ? (
        <AddTask closeModal={() => setShowAddTaskModal(false)} />
      ) : null}
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
