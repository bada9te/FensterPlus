import { Carousel } from 'react-bootstrap';
import slides from '../../data/slider';



const Slider = props => {
    return (
        <Carousel className='shadow overflow-hidden'>
            {
                slides.map((item, key) => {
                    return (
                        <Carousel.Item key={key} interval={1750}> 
                            <img
                                className="d-block w-100"
                                src={item.file}
                                alt="Slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
    );
}

export default Slider;