import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";



const MailsList = props => {
    const [mailsData, setMailsData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/subscribers');
        setMailsData(result.data.data);
    }

    useEffect(() => {
        getData();
    });

    return (
        <>
            <Container>
                <Row>
                    {
                        mailsData.length !== 0
                        ?
                        mailsData.map((item, key) => {
                            return (
                                <Col key={key}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Text>{item.email}</Card.Text>
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


export default MailsList;