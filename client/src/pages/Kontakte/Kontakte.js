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
                    <Col>
                        <Row className="p-3">
                            <ContactPerson title="DEUTSCHLAND" name="Name Surname" phone="+00 000 000 00 0" email="xxxxx@gmail.com"/>
                        </Row>
                        <Row className="p-3">
                            <ContactPerson title="UKRAINE" name="Name Surname" phone="+00 000 000 00 0" email="xxxxx@gmail.com"/>
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
                                    <Card.Text>Kiew, Akademiker Krimskogo 4a. Ukraine</Card.Text>
                                    <Card.Text>Telefon: +38 067 502 19 90</Card.Text>
                                    <Card.Text>in Deutschland: +49 151 506 13 12 6</Card.Text>
                                    <Card.Text>verkaufde@glasso.ua</Card.Text>
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