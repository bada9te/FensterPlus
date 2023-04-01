import { Container, Card, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form'; 
import * as Icon from 'react-bootstrap-icons';
import axios from 'axios';


const BottomBar = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // form submit
    const onSubmit = async(data) => {
        const result = await axios.post('./server.php', { subscriberEmail: data.Email });
        if (result.data.done) {
            alert("Subscribed")
        } else {
            alert("Error")
        }
    }

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
                                <p className='fw-normal'><Icon.GeoAltFill /> Europasrt.27 72510 Stetten a.k.M</p>
                                <p className='fw-normal'><Icon.PhoneFill /> +49 017 35655122</p>
                                <p className='fw-normal'><Icon.EnvelopeFill /> info@fensterplus.com</p>
                            </Row>
                        </Col>
                        <Col className='p-4'>
                            <Row className='mb-3'>
                                <h5 className="fw-bold">AUSSTELLUNGSRAUM</h5>
                            </Row>
                            <Row>
                                <p className='fw-normal'><Icon.GeoAltFill /> Hauptstraße //////</p>
                                <p className='fw-normal'><Icon.PhoneFill /> +49 151 18473827</p>
                                <p className='fw-normal'><Icon.EnvelopeFill /> info@fensterplus.com</p>
                            </Row>
                        </Col>
                        <Col className='p-4'>
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
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default BottomBar;