
import { Col, Card, ButtonGroup, Button } from "react-bootstrap";

const Partner = props => {
    const { title, description, image } = props;

    return (
        <Col className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }} className="my-3 shadow">
                <div className='d-flex justify-content-center'>
                    <img variant="top"
                        className='rounded mt-3' 
                        alt='note-img'
                        src={image} 
                        width="260px" 
                        height="200px" 
                    />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text className='text-center fst-italic'>{description}</Card.Text>
                    <div className='d-flex justify-content-center'>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary">s1</Button>
                        <Button variant="secondary">s2</Button>
                        <Button variant="dark">s3</Button>
                        <Button variant="light">s4</Button>
                    </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Partner;