import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDelete = () => {

    const [show, setShow] = true;

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Deletion confirm</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                Did you really want to delete category?
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-danger">Delete</Button>
                <Button variant="outline-secondary">Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDelete;