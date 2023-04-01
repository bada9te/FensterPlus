
import { Col, Card, ButtonGroup, Button } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const Partner = props => {
    const { title, description, image, social } = props;

    return (
        <Col className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }} className="my-3 shadow">
                <div className='d-flex justify-content-center'>
                    <img variant="top"
                        className='rounded mt-3' 
                        alt='partner-img'
                        src={image} 
                        width='100%'
                        height='100%'
                        style={{objectFit: 'contain'}}  
                    />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text className='text-center fst-italic'>{description}</Card.Text>
                </Card.Body>
                <div className='d-flex justify-content-center pb-3'>
                    <ButtonGroup aria-label="Basic example">
                        { social?.instagram ? <Button className="d-flex align-items-center" variant="danger" href={social.instagram} target="_blank"><Icon.Instagram/></Button> : null }
                        { social?.facebook ? <Button className="d-flex align-items-center" variant="primary" href={social.facebook} target="_blank"><Icon.Facebook/></Button> : null }
                        { social?.twitter ? <Button className="d-flex align-items-center" variant="dark" href={social.twitter} target="_blank"><Icon.Twitter/></Button> : null }    
                        { social?.web.indexOf("salamander") !== -1 ? <Button className="d-flex align-items-center" variant="success" href={social.web} target="_blank">Site</Button> : null }
                        { social?.web.indexOf("inotherm") !== -1 ? <Button className="d-flex align-items-center" variant="dark" href={social.web} target="_blank">Site</Button> : null }
                    </ButtonGroup>
                </div>
            </Card>
        </Col>
    );
}

export default Partner;