import { Container, Row } from "react-bootstrap";
import BottomBar from "../../components/bottom-bar/bottom-bar";
import PartnerContainer from "../../components/partner-container/partner-container";


const Kunden = props => {
    return (
        <>
            <Container className='py-5'>
                <Row>
                    <h2 className="text-center">Unsere Partner</h2>
                </Row>

                <hr/>

                <Row className='pt-5'>
                    <h5 className="fw-bold">UNSERE PARTNER</h5>
                    <p>
                        TEXTTXT
                    </p>
                </Row>
                <Row>
                    <PartnerContainer />
                </Row>
            </Container>

    
            <BottomBar/>
        </>
    );
}

export default Kunden;