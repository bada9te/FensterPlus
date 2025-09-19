import { Card, Col } from 'react-bootstrap';


const DetailsNote = props => {
    const { title, description, image } = props;

    return (
        <Col className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }} className="my-3 shadow">
                <div className='d-flex justify-content-center'>
                    <img variant="top"
                        className='rounded-circle mt-3' 
                        alt='note-img'
                        src={image} 
                        width="100px" 
                        height="100px" 
                    />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text className='text-center'>{description}</Card.Text>
                </Card.Body>
                
            </Card>
        </Col>
    );
}

export default DetailsNote;