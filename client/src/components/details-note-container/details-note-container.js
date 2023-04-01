import DetailsNote from "../details-note/details-note";
import notes from "../../data/notes";


const DetailsNoteContainer = props => {
    const { buttons } = props;
    

    return (
        <>
            {
                notes.map((item, key) => {
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
            }
        </>
    );
}

export default DetailsNoteContainer;