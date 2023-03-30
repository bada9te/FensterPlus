import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Partner from '../../partner/partner';
import { useState, useEffect } from 'react';
import axios from 'axios';


const PartnerList = props => {
    const [partnersData, setPartnersData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/partners');
        setPartnersData(result.data.data);
    }

    useEffect(() => {
        getData();
    });

    const handleRemove = (e) => {
        const titleToRemove = e.target.getAttribute('name');
        const newData = partnersData.filter((item) => item.title !== titleToRemove)
        setPartnersData(newData);
        console.log(partnersData);
    }


    return (
        <>
            <Container>
                <Row>
                    {
                        partnersData.length !== 0 
                        ?
                        partnersData.map((item, key) => {
                            return (
                                <Col key={key}>
                                    <Card style={{ width: '18rem' }}>
                                        <Button title='Remove' variant='danger' name={item.title} onClick={handleRemove}>Remove</Button>
                                        <Partner title={item.title} description={item.description} image={item.file} key={key}/>
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


export default PartnerList;