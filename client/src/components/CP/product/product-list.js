import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ProductItem from '../../product-item/product-item';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ProductList = props => {
    const [productsData, setProductsData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/products');
        setProductsData(result.data.data);
    }

    useEffect(() => {
        getData();
    });

    const handleRemove = (e) => {
        const titleToRemove = e.target.getAttribute('name');
        const newData = productsData.filter((item) => item.title !== titleToRemove)
        setProductsData(newData);
        console.log(productsData);
    }


    return (
        <>
            <Container>
                <Row>
                    {
                        productsData.map((item, key) => {
                            return (
                                <Col key={key}>
                                    <Card style={{ width: '18rem' }}>
                                        <Button title='Remove' variant='danger' name={item.title} onClick={handleRemove}>Remove</Button>
                                        <ProductItem title={item.title} description={item.description} image={item.preview} key={key}/>
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


export default ProductList;