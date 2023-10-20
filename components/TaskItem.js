import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

const TaskItem = (props) => {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <div className="me-3">
          <div>{props.title}</div>
          <div className="fw-lighter">{props.content}</div>
        </div>
        <div className="d-flex align-items-center">
          <i
            class="fa-solid fa-trash m-1"
            style={{ color: "red", cursor: "pointer" }}
          ></i>
          <i
            class="fa-solid fa-pen-to-square m-1"
            style={{ color: "grey", cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
