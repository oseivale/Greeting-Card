import { Modal } from 'react-bootstrap';

const FormModal = ({ show, handleClose, children }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {children}
            </Modal.Body>

            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleSubmit}>Generate Card</Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default FormModal;