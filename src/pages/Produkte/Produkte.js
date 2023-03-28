import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import BottomBar from '../../components/bottom-bar/bottom-bar';
import CategoryTab from '../../components/category-tab/category-tab';
import CertificatesContainer from '../../components/certificates-container/certificates-container';


const Producte = props => {
    return (
        <>
            <Container className='pt-5'>
                <Row>
                    <h2 className="text-center">Produkte</h2>
                </Row>

                <Row>
                    <p className="fst-italic text-center">Unsere Produkte</p>
                </Row>
                <hr/>
            </Container>
            
            <Container className='pt-5'>
                <Tabs
                    defaultActiveKey="all"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="all" title="All">
                        <CategoryTab category="all"/>
                    </Tab>
                    <Tab eventKey="first" title="First">
                        <CategoryTab category="first"/>
                    </Tab>
                    <Tab eventKey="second" title="Second">
                        <CategoryTab category="second"/>
                    </Tab>
                    <Tab eventKey="third" title="Third">
                        <CategoryTab category="third"/>
                    </Tab>
                </Tabs>
            </Container>

            <Container className='py-4'>
                <Row>
                    <h2>Zertifikate</h2>
                </Row>

                <Row>
                    <Container className='py-4'>
                        <Row>
                            <CertificatesContainer/>
                        </Row>
                    </Container>
                </Row>
            </Container>
            
            <BottomBar/>
        </>
    );
}

export default Producte;