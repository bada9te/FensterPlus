import certificates from '../../../data/certificates.json';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Certificate from '../../certificate/certificate';
import { useState } from 'react';
//import FileSaver from 'file-saver'


const CertificateList = props => {
    const [certificatesData, setCertificatesData] = useState(certificates.data);

    const handleRemove = (e) => {
        const titleToRemove = e.target.getAttribute('name');
        const newData = certificatesData.filter((item) => item.title !== titleToRemove)
        setCertificatesData(newData);
        console.log(certificatesData);
    }


    return (
        <>
            <Container>
                <Row>
                    {
                        certificatesData.map((item, key) => {
                            return (
                                <Col key={key}>
                                    <Card>
                                        <Button title='Remove' variant='danger' name={item.title} onClick={handleRemove}>Remove</Button>
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