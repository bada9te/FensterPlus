import notes from '../../../data/notes.json';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import DetailsNote from '../../details-note/details-note';
import { useState } from 'react';
//import FileSaver from 'file-saver'


const NoteList = props => {
    const [notesData, setNotesData] = useState(notes.data);

    const handleRemove = (e) => {
        const titleToRemove = e.target.getAttribute('name');
        const newData = notesData.filter((item) => item.title !== titleToRemove)
        setNotesData(newData);
        console.log(notesData);
    }


    return (
        <>
            <Container>
                <Row>
                    {
                        notesData.map((item, key) => {
                            return (
                                <Col key={key}>
                                    <Card>
                                        <Button title='Remove' variant='danger' name={item.title} onClick={handleRemove}>Remove</Button>
                                        <DetailsNote title={item.title} description={item.description} image={item.image}/>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </>
    );
}


export default NoteList;