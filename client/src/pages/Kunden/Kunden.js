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
                        <h5 className="fw-bold">KURZ ÜBER UNS</h5>
                        text ever since the 1500shas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Row>
                <Row className="pt-3">
                    <p>
                        <h5 className="fw-bold">UNSERE PARTNER</h5>
                        text ever since the 1500shas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Row>
                <Row className="pt-3">
                    <p>
                        <h5 className="fw-bold">WARUM WÄHLEN SIE UNS?</h5>
                        text ever since the 1500shas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Row>
            </Container>

    
            <BottomBar/>
        </>
    );
}

export default Kunden;