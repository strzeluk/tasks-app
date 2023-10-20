import { useRef, useState } from "react";
import axios from "axios";
import TaskModal from "./UI/TaskModal";

const EditTask = (props) => {
  const [disableButton, setDisableButton] = useState(false);
  const [error, setError] = useState(null);

  const formRef = useRef();

  async function editTask(params) {
    setDisableButton(true);
    const { title, content } = formRef.current;
    const idValue = props.task.id;
    const titleValue = title.value;
    const contentValue = content.value;
    axios
      .post("/api/editTask", {
        id: idValue,
        title: titleValue,
        content: contentValue,
      })
      .then((response) => {
        setDisableButton(false);
        window.location.reload(); //TODO: to jest do poprawy...
      })
      .catch((error) => {
        setError("Something went wrong");
        console.log(error);
      });
  }

  return (
    <TaskModal
      disableButton={disableButton}
      action={editTask}
      closeModal={props.closeModal}
      formRef={formRef}
      task={props.task}
    ></TaskModal>
  );
};

export default EditTask;
