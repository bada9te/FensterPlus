import { Card, Button, Col, ButtonGroup, Modal } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { saveAs } from 'file-saver';
import { useState } from 'react';

const ProductItem = props => {
    const { title, description, preview, details } = props;

    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(true);
    }

    const handleDownload = (img) => {
        saveAs(img, `${title}.jpg`)
    }

    return (
        <>
            <Col className='d-flex justify-content-center'>
                <Card style={{ width: '18rem' }} className="my-3 shadow">
                    <div className='d-flex justify-content-center'>
                        <img variant="top"
                            className='rounded mt-3' 
                            alt='note-img'
                            src={preview} 
                            width="200px" 
                            height="260px" 
                        />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center'>{title}</Card.Title>
                        <Card.Text className='text-center'>{description}</Card.Text>
                        <div className='d-flex justify-content-center'>
                        <ButtonGroup aria-label="Basic example">
                            <Button className='d-flex align-items-center' variant="primary" onClick={handleShow}><Icon.EyeFill/></Button>
                            <Button className='d-flex align-items-center' variant="secondary" onClick={() => handleDownload(details)}><Icon.Download/></Button>
                        </ButtonGroup>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img variant="top"
                        alt='note-img'
                        src={details} 
                        width='100%'
                        height='100%'
                        style={{objectFit: 'contain'}} 
                    />
                </Modal.Body>
            </Modal>   
        </>
    );
}

export default ProductItem;