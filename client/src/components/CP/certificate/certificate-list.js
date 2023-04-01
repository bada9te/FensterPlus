import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Certificate from '../../certificate/certificate';
import { useEffect, useState } from 'react';
import axios from 'axios';


const CertificateList = props => {
    const [certificatesData, setCertificatesData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/certificates');
        setCertificatesData(result.data.data);
    }

    useEffect(() => {
        getData();
    });

    const handleRemove = async(e) => {
        const titleToRemove = e.target.getAttribute('name');
        const newData = certificatesData.filter((item) => item.title !== titleToRemove)
        setCertificatesData(newData);
        const result = await axios.post('/get/rm-certificates', { titleToRemove: titleToRemove });
        if (result.data.done) {
            alert("Removed")
        }
    }


    return (
        <>
            <Container>
                <Row>
                    {
                        certificatesData.length !== 0
                        ?
                        certificatesData.map((item, key) => {
                            return (
                                <Col key={key}>
                                    <Card style={{ width: '18rem' }}>
                                        <Button title='Remove' variant='danger' name={item.title} onClick={handleRemove}>Remove</Button>
                                        <Certificate title={item.title} image={item.file}/>
                                    </Card>
                                </Col>
                            );
                        })
                        :
                        null
                    }
                </Row>
            </Container>
        </>
    );
}


export default CertificateList;