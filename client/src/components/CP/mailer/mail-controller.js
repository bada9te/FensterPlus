import { Card } from "react-bootstrap";
import MailSendForm from "./mail-send-form";
import MailsList from "./mails-list";


const MailController = props => {
    return (
        <>
            <Card className="p-0">
                <Card.Header>
                    Mailer
                </Card.Header>
                <Card.Body>
                    <h1>Send email form</h1>
                    <MailSendForm/>
                    <hr/>
                    <h1>List of subscribers</h1>
                    <MailsList/>
                </Card.Body>
            </Card>
        </>
    );
}

export default MailController;