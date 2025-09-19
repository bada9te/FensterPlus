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
                    defaultActiveKey="alle"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="alle" title="Alle">
                        <CategoryTab category="alle"/>
                    </Tab>
                    <Tab eventKey="türen" title="Türen">
                        <CategoryTab category="türen"/>
                    </Tab>
                    <Tab eventKey="fenster" title="Fenster">
                        <CategoryTab category="fenster"/>
                    </Tab>
                    <Tab eventKey="fensterläden" title="Fensterrollläden">
                        <CategoryTab category="fensterläden"/>
                    </Tab>
                    <Tab eventKey="jalousien" title="Jalousien">
                        <CategoryTab category="jalousien"/>
                    </Tab>
                </Tabs>
            </Container>

            <Container className='py-4'>
                <Row>
                    <h2>Zertifikate</h2>
                </Row>

                <Row className='pt-4'>
                    <h4>Türen</h4>
                </Row>
                <Row>
                    <Container className='pb-4'>
                        <Row>
                            <CertificatesContainer what="türen"/>
                        </Row>
                    </Container>
                </Row>

                <Row className='pt-4'>
                    <h4>Fenster</h4>
                </Row>
                <Row>
                    <Container className='pb-4'>
                        <Row>
                            <CertificatesContainer what="fenster"/>
                        </Row>
                    </Container>
                </Row>

                <Row className='pt-4'>
                    <h4>Fensterrollläden</h4>
                </Row>
                <Row>
                    <Container className='pb-4'>
                        <Row>
                            <CertificatesContainer what="fensterläden"/>
                        </Row>
                    </Container>
                </Row>

            </Container>
            
            <BottomBar/>
        </>
    );
}

export default Producte;