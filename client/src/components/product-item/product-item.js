import { Card, Button, Col, ButtonGroup } from 'react-bootstrap';


const ProductItem = props => {
    const { title, description, image } = props;

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
                    <Card.Text className='text-center'>{description}</Card.Text>
                    <div className='d-flex justify-content-center'>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary">Left</Button>
                        <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductItem;