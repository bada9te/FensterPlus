import { Carousel } from 'react-bootstrap';


const Slider = props => {
    return (
        <Carousel className='shadow overflow-hidden'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://wooder-group.ru/upload/medialibrary/d86/_-_.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img-fluid"
                src="https://cdnn11.img.sputnik.by/img/102269/82/1022698203_0:0:2048:1153_1920x0_80_0_0_98dcc39f091aa2ae63f7d48a52e770a6.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://frankfurt.apollo.olxcdn.com/v1/files/apf8811qggls1-UZ/image;s=1920x1080"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;