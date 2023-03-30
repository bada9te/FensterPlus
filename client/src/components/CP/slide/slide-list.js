import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ProductItem from '../../product-item/product-item';
import { useState, useEffect } from 'react';
import axios from 'axios';


const SlideList = props => {
    const [sliderData, setSliderData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/slider');
        setSliderData(result.data.data);
    }

    useEffect(() => {
        getData();
    });

    const handleRemove = (e) => {
        const titleToRemove = e.target.getAttribute('name');
        const newData = sliderData.filter((item) => item.title !== titleToRemove)
        setSliderData(newData);
        console.log(sliderData);
    }


    return (
        <>
            <Container>
                <Row>
                    {
                        sliderData.length !== 0
                        ?
                        sliderData.map((item, key) => {
                            return (
                                <Col key={key}>
                                    <Card>
                                        <Button title='Remove' variant='danger' name={item.title} onClick={handleRemove}>Remove</Button>
                                        <ProductItem title={item.title} description={item.description} image={item.file} key={key}/>
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


export default SlideList;