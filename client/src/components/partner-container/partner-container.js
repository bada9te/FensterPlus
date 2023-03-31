import { useEffect, useState } from 'react';
import Partner from '../partner/partner';
import axios from 'axios';



const PartnerContainer = props => {
    const [partnersData, setPartnersData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/partners');
        setPartnersData(result.data.data);
    }

    useEffect(() => {
        getData();
    });


    return (
        <>
            {
                partnersData.length !== 0 
                ?
                partnersData.map((item, key) => {
                    return(
                        <Partner title={item.title} description={item.description} image={item.file} key={key}/>
                    );
                })
                :
                null
            }
        </>
    );
}

export default PartnerContainer;