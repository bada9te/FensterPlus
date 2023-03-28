import { Form, Button, InputGroup } from "react-bootstrap";


const CertificateAddForm = props => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Certificate title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Certificate file</Form.Label>
                <Form.Control type="file"/>
            </Form.Group>
            
            <Button variant="primary" type="submit" className="mt-4">
                Submit
            </Button>
        </Form>
    );
}

export default CertificateAddForm;