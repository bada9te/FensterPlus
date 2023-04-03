import { Container, Card, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import LogoWhite from '../../images/LogoWhite.png';


const BottomBar = props => {

    return (
        <Card className="w-100 rounded-0" style={{ backgroundColor: 'rgb(46,49,146)', color: 'white' }}>
            <Card.Body>
                <Container>
                    <Row>
                        <Col className='p-4'>
                            <Row className='mb-3'>
                                <h5 className="fw-bold">KORRESPONDENZADRESSE</h5>
                            </Row>
                            <Row>
                                <p className='fw-normal'><Icon.GeoAltFill /> Europasrt.27 72510, Stetten a.k.M</p>
                                <p className='fw-normal'><Icon.PhoneFill /> +49 017 35655122</p>
                                <p className='fw-normal'><Icon.EnvelopeFill /> info@fensterplus.com</p>
                            </Row>
                        </Col>
                        <Col className='p-4'>
                            <Row className='mb-3'>
                                <h5 className="fw-bold">AUSSTELLUNGSRAUM</h5>
                            </Row>
                            <Row>
                                <p className='fw-normal'><Icon.GeoAltFill /> Lagerstraße.15 72510, Stetten a.k.M</p>
                                <p className='fw-normal'><Icon.PhoneFill /> +49 151 18473827</p>
                                <p className='fw-normal'><Icon.EnvelopeFill /> info@fensterplus.com</p>
                            </Row>
                        </Col>

                        <Col className='p-4 d-flex align-items-center'>
                            <img src={LogoWhite} alt="logo" style={{ width: '320px', height: '120px' }}/>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default BottomBar;

/*
<Col className='p-4'>
    <Card style={{ width: '300px' }}>
        <Card.Body>
            <img src={Logo} alt="logo" style={{ width: '270px', height: '120px' }}/>
        </Card.Body>
    </Card>
</Col>
*/


/*
                        <Row className='mb-3'>
                                <h5 className="fw-bold">NEWSLETTER</h5>
                            </Row>
                            <Row>
                                <p className='fw-normal'>
                                    Melden Sie sich für unseren Newsletter an:
                                </p>
                            </Row>
                            <Row> 
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <InputGroup className="mb-3" size='sm'>
                                        <Form.Control
                                            type='email'
                                            placeholder="Email"
                                            aria-label="Email"
                                            aria-describedby="basic-addon2"
                                            {...register("Email", {
                                                required: true,
                                            })} 
                                        />
                                        <Button type='submit' variant="primary" id="button-addon2">
                                            Subscribe
                                        </Button>
                                        <Form.Text className="text-muted">
                                            {errors.Email && <span className="form-text text-danger">This field is required</span>}
                                        </Form.Text>
                                    </InputGroup>
                                </form>
                            </Row>
*/