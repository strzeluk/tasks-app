import { useRef, useState } from "react";
import axios from "axios";
import TaskModal from "./UI/TaskModal";

const AddTask = (props) => {
  const [disableButton, setDisableButton] = useState(false);

  const formRef = useRef();

  async function addNewTask(params) {
    setDisableButton(true);
    const { title, content } = formRef.current;
    const titleValue = title.value.trim();
    const contentValue = content.value.trim();
    await axios.post("/api/addTask", {
      title: titleValue,
      content: contentValue,
    });
    setDisableButton(false);
    window.location.reload(); //TODO: to jest do poprawy...
  }

  return (
    <TaskModal
      disableButton={disableButton}
      action={addNewTask}
      closeModal={props.closeModal}
      formRef={formRef}
    ></TaskModal>
  );
};

export default AddTask;
