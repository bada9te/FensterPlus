import { Card } from "react-bootstrap";
import NoteAddForm from "./notes-add-form";
import NoteList from "./note-list";


const NoteController = props => {
    return (
        <>
            <Card className="p-0">
                <Card.Header>
                    Note
                </Card.Header>
                <Card.Body>
                    <h1>Add note</h1>
                    <NoteAddForm/>
                    <hr/>
                    <h1>List of notes</h1>
                    <NoteList/>
                </Card.Body>
            </Card>
        </>
    );
}

export default NoteController;