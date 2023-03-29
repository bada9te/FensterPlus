import { Container, Row, Card } from 'react-bootstrap';
import CertificateController from '../../components/CP/certificate/certificate-controller';


const ControlPanel = props => {
    return (
        <>
            <Container>
                <Row>
                    <CertificateController/>
                </Row>
            </Container>
        </>
    );
}


export default ControlPanel;