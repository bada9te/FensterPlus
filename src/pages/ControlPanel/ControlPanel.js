import { Container, Row, Card } from 'react-bootstrap';
import CertificateController from '../../components/CP/certificate/certificate-controller';
import dataFile from '../../data/data.json';


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