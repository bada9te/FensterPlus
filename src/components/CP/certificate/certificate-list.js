import fileData from '../../../data/data.json';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Certificate from '../../certificate/certificate';


const CertificateList = props => {
    return (
        <>
            <Container>
                <Row>
                    {
                        fileData.certificates.data.map((item, key) => {
                            return (
                                <Col key={key}>
                                    <Card>
                                        <Button title='Remove' variant='danger'>Remove</Button>
                                        <Certificate title={item.title} image={item.image}/>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </>
    );
}


export default CertificateList;