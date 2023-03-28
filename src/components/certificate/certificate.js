import { Col, Card, Button, ButtonGroup } from 'react-bootstrap';



const Certificate = props => {
    const { image, title } = props;

    return (
        <Col className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }} className="my-3 shadow">
                <div className='d-flex justify-content-center'>
                    <img variant="top"
                        className='rounded mt-3' 
                        alt='note-img'
                        src={image} 
                        width="200px" 
                        height="260px" 
                    />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <div className='d-flex justify-content-center'>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="primary">Preview</Button>
                            <Button variant="secondary">Download</Button>
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Certificate;