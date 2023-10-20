import { useRef, useState } from "react";
import axios from "axios";
import TaskModal from "./UI/TaskModal";

const AddTask = (props) => {
  const [disableButton, setDisableButton] = useState(false);
  const [error, setError] = useState(null);

  const formRef = useRef();

  async function addNewTask(params) {
    setDisableButton(true);
    const { title, content } = formRef.current;
    const titleValue = title.value.trim();
    const contentValue = content.value.trim();
    axios
      .post("/api/addTask", {
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
      action={addNewTask}
      closeModal={props.closeModal}
      formRef={formRef}
      error={error}
    ></TaskModal>
  );
};

export default AddTask;
