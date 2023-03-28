import { Container, Row, Col, Card } from 'react-bootstrap';
import BottomBar from '../../components/bottom-bar/bottom-bar';
import DetailsNoteContainer from '../../components/details-note-container/details-note-container';


const Vorteil = props => {
    return (
        <>
            <Container className='pt-5'>
                <Row>
                    <h2 className="text-center">Vorteil</h2>
                </Row>

                <Row>
                    <p className="fst-italic text-center">Warum wählen Sie uns?</p>
                </Row>
                <hr/>
                <Row className='pt-5'>
                    <p>
                        <h5 className="fw-bold">FENSTER PLUS</h5>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Row>

                <Row className='p-5'>
                    <h3 className="text-center">VORTEILE EINER PARTNERSCHAFT MIT GLASSO FÜR KUNDEN</h3>
                </Row>
                <Row>
                    <DetailsNoteContainer/>
                </Row>

                <Row className='p-5'>
                    <Col className='d-flex justify-content-center px-3'>
                        <Card style={{ width: '25rem' }} className="my-3 shadow">
                            <Card.Body>
                                <Card.Title><h2>Text 1</h2></Card.Title>
                                <Card.Text>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center px-3'>
                        <Card style={{ width: '25rem' }} className="my-3 shadow">
                            <Card.Body>
                                <Card.Title><h2>Text 2</h2></Card.Title>
                                <Card.Text>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <BottomBar/>
        </>
    );
}

export default Vorteil;