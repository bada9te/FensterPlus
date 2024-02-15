import { Container, Row, Col, Card } from "react-bootstrap";
import ContactPerson from "../../components/contact-person/contact-person";
import GoogleMap from "../../components/google-map/google-map";
import BottomBar from '../../components/bottom-bar/bottom-bar';


const Kontakte = props => {
    return (
        <>
            <Container className='py-5'>
                <Row>
                    <h2 className="text-center">Kontakte</h2>
                </Row>

                <Row>
                    <p className="fst-italic text-center">Kontaktieren Sie uns</p>
                </Row>
                <hr/>

                <Row>
                    <h3 className="fw-bold">ARBEITSPLAN 8.00-18.00</h3>
                </Row>

                <Row>
                    <Col>
                        <Row className="p-3">
                            <ContactPerson title="Leiter der Firma" name="xxxxxxxxxx" phone="+000 000 00000000" email="info@info.com"/>
                        </Row>
                        <Row className="p-3">
                            <ContactPerson title="Verkaufsleiter" name="xxxxxxxxxx" phone="+000 000 00000000" email="info@info.com"/>
                        </Row>
                    </Col>

                    <Col>
                        <Row className="p-3">
                            <Card className="p-0">
                                <Card.Header as="h5">WIR SIND HIER</Card.Header>
                                <Card.Body>
                                    <GoogleMap/>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="p-3">
                            <Card className="p-0">
                                <Card.Header as="h5">DIE ADRESSE</Card.Header>
                                <Card.Body>
                                    <Card.Text>xxxxxxxxxxxxxxxxx</Card.Text>
                                    <Card.Text>Telefon: +00 000 000000000</Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <BottomBar/>
        </>
    );
}

export default Kontakte;