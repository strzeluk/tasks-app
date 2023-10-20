import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const ConfirmationModal = (props) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (props.error) {
      setError(props.error);
    }
  }, [props.error]);

  return (
    <Modal show={true} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Do your really want to delete this task?</p>
      </Modal.Body>

      <Modal.Footer>
        {error && <p className="text-danger">{error}</p>}
        <Button variant="secondary" onClick={() => props.closeModal()}>
          Cancel
        </Button>
        <Button
          variant="danger"
          disabled={props.disableButton}
          onClick={props.action}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
