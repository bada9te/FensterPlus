import { Container, Row, Card, Col } from "react-bootstrap";
import BottomBar from "../../components/bottom-bar/bottom-bar";
import PartnerContainer from "../../components/partner-container/partner-container";


const Kunden = props => {
    return (
        <>
            <Container className='py-5'>
                <Row>
                    <h2 className="text-center">Unsere Kunden</h2>
                </Row>
                <Row>
                    <p className="fst-italic text-center">unsere Partner</p>
                </Row>

                <hr/>

                <Row className='p-3'>
                    <h3>Unsere Partner</h3>
                </Row>
                <Row>
                    <PartnerContainer />
                </Row>


                <Row className="pt-5">
                    <p>
                        <h5 className="fw-bold">EIN BISSCHEN ÜBER UNS</h5>
                        FensterPlus ist seit 10 Jahren auf dem baden-württembergischen Markt und hat sich in dieser Zeit einen guten Ruf und Erfahrung als zuverlässiges Unternehmen in der Montage von Fenster- und Türenprodukten erarbeitet. Vertrauen Sie uns, denn wir respektieren und schätzen jeden Kunden
                    </p>
                </Row>
            </Container>

    
            <BottomBar/>
        </>
    );
}

export default Kunden;