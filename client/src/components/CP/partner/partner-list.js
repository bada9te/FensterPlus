import partners from '../../../data/partners.json';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Partner from '../../partner/partner';
import { useState } from 'react';
//import FileSaver from 'file-saver'


const PartnerList = props => {
    const [partnersData, setPartnersData] = useState(partners.data);

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
                        partnersData.map((item, key) => {
                            return (
                                <Col key={key}>
                                    <Card>
                                        <Button title='Remove' variant='danger' name={item.title} onClick={handleRemove}>Remove</Button>
                                        <Partner title={item.title} description={item.description} image={item.image} key={key}/>
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


export default PartnerList;