import { Container, Tabs, Tab } from 'react-bootstrap';
import CertificateController from '../../components/CP/certificate/certificate-controller';
import NoteController from '../../components/CP/notes/note-controller';
import PartnerController from '../../components/CP/partner/partner-controller';
import ProductController from '../../components/CP/product/product-controller';
import SliderController from '../../components/CP/slide/slide-controller';


const ControlPanel = props => {
    return (
        <>
            <Container>
                <Tabs
                    defaultActiveKey="certificates"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="certificates" title="Certificates">
                        <CertificateController/>
                    </Tab>
                    <Tab eventKey="notes" title="Notes">
                        <NoteController/>
                    </Tab>
                    <Tab eventKey="partners" title="Partners">
                        <PartnerController/>
                    </Tab>
                    <Tab eventKey="products" title="Products">
                        <ProductController/>
                    </Tab>
                    <Tab eventKey="slider" title="Slider">
                        <SliderController/>
                    </Tab>
                    <Tab eventKey="mailer" title="Mailer">
                        email
                    </Tab>
                </Tabs>
            </Container>
        </>
    );
}


export default ControlPanel;