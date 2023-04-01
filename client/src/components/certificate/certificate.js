import { Col, Card, Button, ButtonGroup, Modal } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { saveAs } from 'file-saver';
import { useState } from 'react';


const Certificate = props => {
    const { images, title } = props;

    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(true);
    }

    const handleDownload = (imges) => {
        images.map(item => {
            return saveAs(item, `${item}.jpg`)
        });
    }

    return (
        <>
            <Col className='d-flex justify-content-center'>
                <Card style={{ width: '18rem' }} className="my-3 shadow">
                    <div className='d-flex justify-content-center'>
                        <img variant="top"
                            className='rounded mt-3' 
                            alt='note-img'
                            src={images[0]} 
                            width='100%'
                            height='100%'
                            style={{objectFit: 'contain'}} 
                        />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center'>{title}</Card.Title>
                    </Card.Body>
                    <div className='d-flex justify-content-center pb-3'>
                        <ButtonGroup aria-label="Basic example">
                            <Button className='d-flex align-items-center' variant="primary" onClick={handleShow}><Icon.EyeFill/></Button>
                            <Button className='d-flex align-items-center' variant="secondary" onClick={() => handleDownload(images[0])}><Icon.Download/></Button>
                        </ButtonGroup>
                    </div>
                </Card>
            </Col>

            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        images.map((item, key) => {
                            return (
                                <img variant="top"
                                    alt='note-img'
                                    src={item} 
                                    width='100%'
                                    height='100%'
                                    style={{objectFit: 'contain'}} 
                                    key={key}
                                />
                            );
                        })
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Certificate;

