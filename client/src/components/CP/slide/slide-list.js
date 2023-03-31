import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ProductItem from '../../product-item/product-item';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SlidePreview from './slide-preview';


const SlideList = props => {
    const [sliderData, setSliderData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/slider');
        setSliderData(result.data.data);
    }

    useEffect(() => {
        getData();
    });

    const handleRemove = async(e) => {
        const titleToRemove = e.target.getAttribute('name');
        const newData = sliderData.filter((item) => item.title !== titleToRemove)
        setSliderData(newData);
        const result = await axios.post('/get/rm-slider', { titleToRemove: titleToRemove });
        if (result.data.done) {
            alert("Removed")
        }
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
                                    <Card style={{ width: '18rem' }}>
                                        <Button title='Remove' variant='danger' name={item.title} onClick={handleRemove}>Remove</Button>
                                        <SlidePreview title={item.title} description={item.description} file={item.file}/>
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