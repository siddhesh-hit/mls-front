import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalHome(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="closebutton" closeButton></Modal.Header>
      <Modal.Body className="smfkdnmk">
        <p>
          This represents the beta iteration of Portal, containing information
          updated until 2013.
        </p>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
export default ModalHome;
