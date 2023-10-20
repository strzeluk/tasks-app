import { useRef, useState } from "react";
import axios from "axios";
import TaskModal from "./UI/TaskModal";

const EditTask = (props) => {
  const [disableButton, setDisableButton] = useState(false);
  const formRef = useRef();

  async function editTask(params) {
    setDisableButton(true);
    const { title, content } = formRef.current;
    const idValue = props.task.id;
    const titleValue = title.value;
    const contentValue = content.value;
    await axios.post("/api/editTask", {
      id: idValue,
      title: titleValue,
      content: contentValue,
    });
    setDisableButton(false);
    window.location.reload(); //TODO: to jest do poprawy...
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
