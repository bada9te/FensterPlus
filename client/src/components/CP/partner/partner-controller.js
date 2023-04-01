import { Card } from "react-bootstrap";
import PartnerAddForm from "./partner-add-form";
import PartnerList from "./partner-list";


const PartnerController = props => {
    return (
        <>
            <Card className="p-0">
                <Card.Header>
                    Partner
                </Card.Header>
                <Card.Body>
                    <h1>Add partner</h1>
                    <PartnerAddForm/>
                    <hr/>
                    <h1>List of partners</h1>
                    <PartnerList/>
                </Card.Body>
            </Card>
        </>
    );
}

export default PartnerController;