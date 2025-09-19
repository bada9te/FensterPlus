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

                <Row className='py-5'>
                    <h5 className="fw-bold">UNSERE PARTNER</h5>
                    <p>
                        Unsere Partner sind zwei zu Recht bekannte und zuverlässige Unternehmen. Die deutsche Firma Salamander produziert Fenster von höchster Qualität, die auf dem europäischen Markt Anerkennung gefunden haben und sich leicht mit jedem Interieur kombinieren lassen. Das slowenische Unternehmen Inotherm mit mehr als 25 Jahren Erfahrung ist auf die Herstellung zuverlässiger Türen mit verschiedenen Designlösungen für den anspruchsvollsten Geschmack spezialisiert.
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