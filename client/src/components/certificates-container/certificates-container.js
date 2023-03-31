import Certificate from '../certificate/certificate';
import axios from 'axios';
import { useEffect, useState } from 'react';



const CertificatesContainer = props => {
    const [certificatesData, setCertificatesData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/certificates');
        setCertificatesData(result.data.data);
    }

    useEffect(() => {
        getData();
    });


    return (
        <>
            {
                certificatesData.map((item, key) => {
                    return (
                        <Certificate title={item.title} image={item.file} key={key} />
                    );
                })
            }
        </>
    );
}

export default CertificatesContainer;