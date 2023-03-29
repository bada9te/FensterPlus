import DetailsNote from "../details-note/details-note";

// data
import notesFile from '../../data/notes.json';


const DetailsNoteContainer = props => {
    const { buttons } = props;

    return (
        <>
            {
                notesFile.data.map((item, key) => {
                    return (
                        <DetailsNote 
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            key={key}
                            button={buttons}
                        />
                    );
                })
            }
        </>
    );
}

export default DetailsNoteContainer;