import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import EditTask from "./EditTask";
import ConfirmationModal from "./UI/confirmationModal";

const TaskItem = (props) => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);
  const { task } = props;

  const deleteHandler = async () => {
    await axios.post("/api/deleteTask", { id: parseInt(task.id) });
    window.location.reload();
  };

  const deleteClickHandler = () => {
    setShowDeleteTaskModal((prevState) => !prevState);
  };

  const editClickHandler = async () => {
    setShowEditTaskModal((prevState) => !prevState);
  };

  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-between">
          <div className="me-3">
            <div className="d-flex align-items-center">
              <h4>{task.title}</h4>
              <span className="small ms-3">
                Created: {task.createdAt.slice(0, 10)}
              </span>
            </div>

            <div></div>
            <div className="fw-lighter">{task.content}</div>
          </div>
          <div className="d-flex align-items-center">
            <Button
              className="btn btn-sm btn-danger ms-2"
              onClick={deleteClickHandler}
            >
              <i className="fa-solid fa-trash " style={{ cursor: "pointer" }} />
            </Button>
            <Button
              className="btn btn-sm btn-warning ms-2"
              onClick={editClickHandler}
            >
              <i
                className="fa-solid fa-pen-to-square"
                style={{ cursor: "pointer" }}
              />
            </Button>
          </div>
        </div>
      </li>
      {showEditTaskModal ? (
        <EditTask closeModal={() => setShowEditTaskModal(false)} task={task} />
      ) : null}
      {showDeleteTaskModal ? (
        <ConfirmationModal
          closeModal={() => setShowDeleteTaskModal(false)}
          action={deleteHandler}
        />
      ) : null}
    </>
  );
};

export default TaskItem;
