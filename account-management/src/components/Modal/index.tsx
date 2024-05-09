import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface ModalCustomProps {
  show: boolean;
  handleClose: () => void;
  modalTitle: string;
  children: any;
  handleSubmit: any;
}
function ModalCustom({
  show,
  handleClose,
  children,
  modalTitle,
  handleSubmit,
}: ModalCustomProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCustom;
