import Certificate from '../certificate/certificate';
import certificates from '../../data/certificates';



const CertificatesContainer = props => {

    const { what } = props;

    return (
        <>
            {
                certificates.filter((item) => item.what === what).map((item, key) => {
                    return (
                        <Certificate title={item.title} images={item.file} key={key} />
                    );
                })
            }
        </>
    );
}

export default CertificatesContainer;