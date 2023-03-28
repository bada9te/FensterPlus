import { Container, Row, Col, Card } from "react-bootstrap";
import ContactPerson from "../../components/contact-person/contact-person";


const Kontakte = props => {
    return (
        <>
            <Container className='pt-5'>
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

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Kontakte;