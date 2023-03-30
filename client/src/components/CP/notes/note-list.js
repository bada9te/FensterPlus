import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import DetailsNote from '../../details-note/details-note';
import { useState, useEffect } from 'react';
import axios from 'axios';


const NoteList = props => {
    const [notesData, setNotesData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/notes');
        setNotesData(result.data.data);
    }

    useEffect(() => {
        getData();
    });

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
                        notesData.length !== 0
                        ?
                        notesData.map((item, key) => {
                            return (
                                <Col key={key}>
                                    <Card>
                                        <Button title='Remove' variant='danger' name={item.title} onClick={handleRemove}>Remove</Button>
                                        <DetailsNote title={item.title} description={item.description} image={item.file}/>
                                    </Card>
                                </Col>
                            );
                        })
                        :
                        null
                    }
                </Row>
            </Container>
        </>
    );
}


export default NoteList;