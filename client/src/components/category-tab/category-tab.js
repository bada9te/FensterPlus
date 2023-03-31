import { Container, Row } from 'react-bootstrap';
import ProductItem from '../../components/product-item/product-item';
import { useState, useEffect } from 'react';
import axios from 'axios';



const CategoryTab = props => {
    const { category } = props;
    const [productsData, setProductsData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/products');
        setProductsData(result.data.data);
    }

    useEffect(() => {
        getData();
    });

    return (
        <Container className='py-5'>
            <Row>
                {
                    productsData.map((item, key) => {
                        if (category.toLowerCase() === "all") {
                            return ( 
                                <ProductItem image={item.preview} title={item.title} description={item.description} key={key} />
                            );
                        } else if (item.category.toLowerCase() === category.toLowerCase()) {
                            return ( 
                                <ProductItem image={item.preview} title={item.title} description={item.description} key={key} />
                            );
                        } else {
                            return null;
                        }
                    })
                }
            </Row>
        </Container>
    );
}

export default CategoryTab;