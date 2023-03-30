import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';



const Slider = props => {
    const [sliderData, setSliderData] = useState([]);
    const getData = async() => {
        const result = await axios.get('/get/slider');
        setSliderData(result.data.data)
    }

    useEffect(() => {
        getData();
    });


    return (
        <Carousel className='shadow overflow-hidden'>
            {
                sliderData.map((item, key) => {
                    return (
                        <Carousel.Item key={key}>
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