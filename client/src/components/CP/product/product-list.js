import products from '../../../data/products.json';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ProductItem from '../../product-item/product-item';
import { useState } from 'react';
//import FileSaver from 'file-saver'


const ProductList = props => {
    const [productsData, setProductsData] = useState(products.data);

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
                                    <Card>
                                        <Button title='Remove' variant='danger' name={item.title} onClick={handleRemove}>Remove</Button>
                                        <ProductItem title={item.title} description={item.description} image={item.image} key={key}/>
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