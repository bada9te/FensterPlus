import Certificate from '../certificate/certificate';
import certificates from '../../data/certificates';



const CertificatesContainer = props => {

    return (
        <>
            {
                certificates.map((item, key) => {
                    return (
                        <Certificate title={item.title} images={item.file} key={key} />
                    );
                })
            }
        </>
    );
}

export default CertificatesContainer;