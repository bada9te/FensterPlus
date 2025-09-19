import { Container, Row } from 'react-bootstrap';
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
                    <h5 className="fw-bold">FENSTER PLUS</h5>
                    <p>
                        FensterPlus ist seit 10 Jahren auf dem baden-württembergischen Markt und hat sich in dieser Zeit einen guten Ruf und Erfahrung als zuverlässiges Unternehmen in der Montage von Fenster- und Türenprodukten erarbeitet. Vertrauen Sie uns, denn wir respektieren und schätzen jeden Kunden.
                    </p>
                </Row>

                <Row className='p-5'>
                    <h3 className="text-center">HIER SIND UNSERE STÄRKEN:</h3>
                </Row>
                <Row className='pb-5'>
                    <DetailsNoteContainer/>
                </Row>
            </Container>

            <BottomBar/>
        </>
    );
}

export default Vorteil;