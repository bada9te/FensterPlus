import Slider from '../../components/slider/slider';
import { Container, Row } from 'react-bootstrap';
import DetailsNote from '../../components/details-note/details-note';
import ProductItem from '../../components/product-item/product-item';
import BottomBar from '../../components/bottom-bar/bottom-bar';

// data
import productsFile from '../../data/products.json';
import DetailsNoteContainer from '../../components/details-note-container/details-note-container';



const Main = props => {
    return (
        <>
            <Slider/>
            
            <Container className='py-5'>
                <Row>
                    <h2 className="text-center">Firma FensterPlus - 19 Jahre Erfahrung</h2>
                </Row>

                <Row>
                    <p className="fst-italic text-center">in der Herstellung von durchscheinenden Strukturen</p>
                </Row>

                <Row className='my-3 mb-5'>
                    <DetailsNoteContainer buttons/>
                </Row>

                <Row className='my-3'>
                    <h2>FensterPlus-Produkte</h2>
                </Row>

                <Row className='my-3 mb-5'>
                    {
                        productsFile.data.map((item, key) => {
                            return (
                                <ProductItem 
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    key={key}
                                />
                            );
                        })
                    }
                </Row>
            </Container>
            
            <BottomBar/>
        </>
    );
}

export default Main;