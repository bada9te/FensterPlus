import { Carousel } from 'react-bootstrap';

//data
import slidesFile from '../../data/slider.json';


const Slider = props => {
    return (
        <Carousel className='shadow overflow-hidden'>
            {
                slidesFile.data.map((item, key) => {
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.image}
                                alt="Slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.label}</h3>
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