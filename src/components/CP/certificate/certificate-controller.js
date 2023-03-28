import { Card, Form } from "react-bootstrap";
import CertificateAddForm from "./certificate-add-form";
import CertificateList from "./certificate-list";


const CertificateController = props => {
    return (
        <>
            <Card className="p-0">
                <Card.Header>
                    Certificate
                </Card.Header>
                <Card.Body>
                    <h1>Add certificate</h1>
                    <CertificateAddForm/>
                    <hr/>
                    <h1>List of certificates</h1>
                    <CertificateList/>
                </Card.Body>
            </Card>

        </>
    );
}

export default CertificateController;