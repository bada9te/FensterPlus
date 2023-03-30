import DetailsNote from "../details-note/details-note";
import axios from 'axios';
import { useEffect, useState } from "react";



const DetailsNoteContainer = props => {
    const { buttons } = props;
    const [notesData, setNotesData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/notes');
        setNotesData(result.data.data);
    }

    useEffect(() => {
        getData();
    });

    return (
        <>
            {
                notesData.length !== 0
                ?
                notesData.map((item, key) => {
                    return (
                        <DetailsNote 
                            image={item.file}
                            title={item.title}
                            description={item.description}
                            key={key}
                            button={buttons}
                        />
                    );
                })
                :
                null
            }
        </>
    );
}

export default DetailsNoteContainer;