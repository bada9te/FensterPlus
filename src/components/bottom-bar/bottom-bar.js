import { Container, Card, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


const BottomBar = props => {
    const variant = "primary";

    return (
        <Card className="w-100 rounded-0" style={{ backgroundColor: 'rgb(46,49,146)', color: 'white' }}>
            <Card.Body>
                <Container>
                    <Row>

                        <Col className='p-4'>
                            <Row className='mb-5'>
                                <h5 className="fw-bold">UNSERE VORTEILE</h5>
                            </Row>
                            <Row>
                                <p className='fw-normal'>
                                    GLASSO ist führend auf dem ukrainischen Markt für die Herstellung und Installation von Metall-Kunststoff-Fenstern, Balkonblöcken und Türen. Aluminiumstrukturen
                                </p>
                            </Row>
                        </Col>
                        <Col className='p-4'>
                            <Row className='mb-5'>
                                <h5 className="fw-bold">NEWSLETTER</h5>
                            </Row>
                            <Row>
                                <p className='fw-normal'>
                                    Melden Sie sich für unseren Newsletter an:
                                </p>
                            </Row>
                            <Row>
                                <InputGroup className="mb-3" size='sm'>
                                    <Form.Control
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="primary" id="button-addon2">
                                        Subscribe
                                    </Button>
                                </InputGroup>
                            </Row>
                        </Col>
                        <Col className='p-4'>
                            <Row className='mb-5'>
                                <h5 className="fw-bold">KONTAKTDATEN</h5>
                            </Row>
                            <Row>
                                <p className='fw-normal'><Icon.GeoAltFill /> Super puper adress on Earth</p>
                                <p className='fw-normal'><Icon.PhoneFill /> Telefon: +38 000 00 00 00</p>
                                <p className='fw-normal'><Icon.EnvelopeFill /> Email: xxxxxx@gmail.com</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default BottomBar;