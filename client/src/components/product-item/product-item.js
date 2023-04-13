import { Card, Button, Col, Row, ButtonGroup, Modal, Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { saveAs } from 'file-saver';
import { useState } from 'react';


const ProductItem = props => {
    const { title, description, preview, details, additionalLink } = props;

    const [show, setShow] = useState(false);


    function handleShow() {
        setShow(true);
    }

    const handleDownload = (images) => {
        images.map(item => {
            return saveAs(item,`${item}.jpg`)
        });
    }
    
    return (
        <>
            <Col className='d-flex justify-content-center'>
                <Card style={{ width: '18rem' }} className="my-3 shadow">
                    <div className='d-flex justify-content-center'>
                        <img variant="top"
                            className='rounded mt-3' 
                            alt='product-img'
                            src={preview} 
                            width='100%'
                            height='100%'
                            style={{objectFit: 'contain'}}  
                        />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center'>{title}</Card.Title>
                    </Card.Body>
                    <div className='d-flex justify-content-center mb-3'>
                        <ButtonGroup aria-label="Basic example">
                            <Button className='d-flex align-items-center' variant="primary" onClick={handleShow}><Icon.EyeFill/></Button>
                            <Button className='d-flex align-items-center' variant="secondary" onClick={() => handleDownload(details)}><Icon.Download/></Button>
                        </ButtonGroup>
                    </div>
                </Card>
            </Col>
            
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            {
                                details.map((item, key) => {
                                    return (
                                        <div key={key}>
                                            {
                                                key === 0
                                                ?
                                                <Row>
                                                    <Col className='d-flex align-items-center justify-content-center p-5'>
                                                        <Card.Body>
                                                            <Card.Text className='text-center fs-4'>
                                                                {description}
                                                                {' '}
                                                                <a href={additionalLink} target="_blank" rel="noopener noreferrer">{additionalLink}</a>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Col>
                                                    
                                                    <Col className='d-flex align-items-center justify-content-center'>
                                                        <img variant="top"
                                                            alt='product-img'
                                                            src={item} 
                                                            width='100%'
                                                            height='100%'
                                                            style={{objectFit: 'contain', minWidth: '385px'}} 
                                                            key={key}
                                                        />
                                                    </Col>
                                                </Row>
                                                :
                                                <Col className='d-flex align-items-center justify-content-center'>
                                                    <img variant="top"
                                                        alt='product-img'
                                                        src={item} 
                                                        width='100%'
                                                        height='100%'
                                                        style={{objectFit: 'contain', minWidth: '385px', maxWidth: '550px'}} 
                                                        key={key}
                                                    />
                                                </Col>
                                            }
                                        </div>
                                    );
                                })
                            }
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProductItem;