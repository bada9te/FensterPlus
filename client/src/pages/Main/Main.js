import Slider from '../../components/slider/slider';
import { Container, Row } from 'react-bootstrap';
import BottomBar from '../../components/bottom-bar/bottom-bar';
import DetailsNoteContainer from '../../components/details-note-container/details-note-container';
import ProductContainer from '../../components/product-container/product-container';



const Main = props => {
    return (
        <>
            <Container className='pb-5'>
                <Row className="d-flex justify-content-center pb-5">
                    <div style={{width: '910px'}}>
                        <Slider/>
                    </div>
                </Row>
                <Row>
                    <h2 className="text-center">Firma FensterPlus - 10 Jahre Erfahrung</h2>
                </Row>

                <Row>
                    <p className="fst-italic text-center">in der Herstellung von Fenster- und Türobjekte!</p>
                    <p className="text-center">Seit mehr als 10 Jahren montieren und reparieren wir Fenster, Türen, Rollläden, Jalousien.</p>
                </Row>

                <Row className='my-3 mb-5'>
                    <DetailsNoteContainer buttons/>
                </Row>

                <Row className='my-3'>
                    <h2>FensterPlus-Produkte</h2>
                </Row>

                <Row className='my-3 mb-5'>
                    <ProductContainer/>
                </Row>
            </Container>
            
            <BottomBar/>
        </>
    );
}

export default Main;