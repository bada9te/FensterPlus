import Partner from '../partner/partner';

// data 
import parnersFile from '../../data/partners.json';


const PartnerContainer = props => {
    return (
        <>
            {
                parnersFile.data.map((item, key) => {
                    return(
                        <Partner title={item.title} description={item.description} image={item.image} key={key}/>
                    );
                })
            }
        </>
    );
}

export default PartnerContainer;