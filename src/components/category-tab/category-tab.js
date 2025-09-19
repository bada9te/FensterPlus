import { Container, Row } from 'react-bootstrap';
import ProductItem from '../product-item/product-item';
import products from '../../data/products';



const CategoryTab = props => {
    const { category } = props;

    return (
        <Container className='py-5'>
            <Row>
                {
                    products.map((item, key) => {
                        if (category.toLowerCase() === "alle") {
                            return ( 
                                <ProductItem preview={item.preview} details={item.details} title={item.title} description={item.description} key={key} additionalLink={item.additionalLink} />
                            );
                        } else if (item.category.toLowerCase() === category.toLowerCase()) {
                            return ( 
                                <ProductItem preview={item.preview} details={item.details} title={item.title} description={item.description} key={key} additionalLink={item.additionalLink}/>
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