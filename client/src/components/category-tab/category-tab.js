import { Container, Row } from 'react-bootstrap';
import ProductItem from '../../components/product-item/product-item';

// data
import productsFile from '../../data/products.json';


const CategoryTab = props => {
    const { category } = props;

    return (
        <Container className='py-5'>
            <Row>
                {
                    productsFile.data.map((item, key) => {
                        if (category.toLowerCase() === "all") {
                            return ( 
                                <ProductItem image={item.image} title={item.title} description={item.description} key={key} />
                            );
                        } else if (item.category.toLowerCase() === category.toLowerCase()) {
                            return ( 
                                <ProductItem image={item.image} title={item.title} description={item.description} key={key} />
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