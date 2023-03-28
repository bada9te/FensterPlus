import { Card } from "react-bootstrap";

const ContactPerson = props => {
    const { title, name, phone, email } = props;
    return (
        <Card className="p-0">
            <Card.Header as="h5">{title}</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{phone}</Card.Text>
                <Card.Text>{email}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ContactPerson;