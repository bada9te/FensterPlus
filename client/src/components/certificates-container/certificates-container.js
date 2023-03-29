import Certificate from '../certificate/certificate';

// data
import certificatesFile from '../../data/certificates.json';


const CertificatesContainer = props => {
    return (
        <>
            {
                certificatesFile.data.map((item, key) => {
                    return (
                        <Certificate title={item.title} image={item.image} key={key} />
                    );
                })
            }
        </>
    );
}

export default CertificatesContainer;