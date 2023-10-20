import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const TaskModal = (props) => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (props.task) {
      setFormData(props.task);
    }
  }, []);

  useEffect(() => {
    if (props.error) {
      setError(props.error);
    }
  }, [props.error]);

  const submitHandler = () => {
    if (!formData.title || !formData.content) {
      setError("Title and content are required");
      return;
    }
    if (formData.title.length > 255) {
      setError("Title is to long");
    }
    props.action(formData);
  };

  const titleChangeHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const contentChangeHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, content: event.target.value };
    });
  };

  return (
    <Modal show={true} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form ref={props.formRef}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={formData.title}
              onChange={titleChangeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="form-control"
              value={formData.content}
              onChange={contentChangeHandler}
              required
            />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        {error && <p className="text-danger">{error}</p>}
        <Button variant="secondary" onClick={() => props.closeModal()}>
          Cancel
        </Button>
        <Button
          variant="primary"
          disabled={props.disableButton}
          onClick={submitHandler}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
