import Partner from '../partner/partner';
import partners from '../../data/partners';




const PartnerContainer = props => {
    

    return (
        <>
            {
                partners.map((item, key) => {
                    return(
                        <Partner title={item.title} description={item.description} image={item.file} social={item.social} key={key}/>
                    );
                })
            }
        </>
    );
}

export default PartnerContainer;