import Slider from '../../components/slider/slider';
import { Container, Row, Col } from 'react-bootstrap';
import DetailsNote from '../../components/details-note/details-note';
import ProductItem from '../../components/product-item/product-item';
import BottomBar from '../../components/bottom-bar/bottom-bar';



const dataNotes = [
    { 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Eo_circle_grey_checkmark.svg/2048px-Eo_circle_grey_checkmark.svg.png", 
        title: "QUALITÄTSKONTROLLE", 
        description: "Jedes Fenster wird ausnahmslos von der technischen Kontrollabteilung am Stand der Qualitätskontrolle überprüft. Qualität ist nicht nur ein Wort!" 
    },
    { 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Eo_circle_grey_checkmark.svg/2048px-Eo_circle_grey_checkmark.svg.png", 
        title: "WIR LIEFERN FENSTER", 
        description: "Lieferung an einem vereinbarten Tag und zu einer vereinbarten Zeit in Fahrzeugen mit Schiebemarkise. Die Fenster sind ordentlich und sauber" 
    },
    { 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Eo_circle_grey_checkmark.svg/2048px-Eo_circle_grey_checkmark.svg.png", 
        title: "PROFIS", 
        description: "Erfahrenes, qualifiziertes Personal mit langjähriger Erfahrung. Hochrangige Spezialisten! Wir schätzen und respektieren unsere Mitarbeiter!" 
    },
    { 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Eo_circle_grey_checkmark.svg/2048px-Eo_circle_grey_checkmark.svg.png", 
        title: "WIR RATEN!", 
        description: "Kundendienstmanager helfen Ihnen bei der Entwicklung, Gestaltung und Ausführung. Persönlicher Manager - für operative Unterstützung." 
    },
];

const dataProducts = [
    { 
        image: "https://glasso-fenster.de/assets/img/portfolio/windows_glasso7s.jpg", 
        title: "FENSTER GLASSO 7S EU", 
        description: "Ein Fenster mit einem europäischen Sechs-Kammer-Profilsystem - hergestellt in deutscher Qualität. Hohe Qualität und hervorragende Eigenschaften ermöglichen es uns, solche Fenster für die Verglasung von Büros, Wohngebäuden, Wohnungen, öffentlichen und privaten Einrichtungen, Kindergärten und Schulen zu empfehlen, um Ressourcen zu sparen und zu sparen. Ein solches System entspricht vollständig allen modernen Standards und Normen. Die Sechs-Kammer-Glasso 7S-Serie ist die optimale Lösung für Menschen, die Qualität bevorzugen. Die Entwicklung dieses Systems basiert auf hohen Anforderungen an Energieeffizienz, Zuverlässigkeit und Schalldämmung." 
    },
    { 
        image: "https://glasso-fenster.de/assets/img/portfolio/windows_glasso85premium.jpg", 
        title: "FENSTER GLASSO 85 PREMIUM", 
        description: "Premium ukrainische Qualität. Das einzigartige Glasso Premium 85-System mit einer Einbautiefe von 85 mm kann in Bezug auf Qualität, Steifigkeit und Stabilität mit den weltweit besten Premium-Profilsystemen mithalten und gleichzeitig einen angemessenen Preis erzielen. Dank drei Dichtungskreisläufen, sieben Kammern im Flügel und Rahmen, einer Außenwanddicke von 2,8 mm, maximaler Energieeinsparung und Funktionalität wird erreicht. Wir empfehlen dieses System ausnahmslos in allen Fällen, wenn es darum geht, die hochwertigsten Materialien mit außergewöhnlichen Eigenschaften und erstklassiger Funktionalität anzuwenden. Ein echtes Premium-Fenster von Glasso ohne Kompromisse." 
    },
    { 
        image: "https://glasso-fenster.de/assets/img/portfolio/windows_glasso85premium.jpg", 
        title: "FENSTER GLASSO 85 PREMIUM", 
        description: "Premium ukrainische Qualität. Das einzigartige Glasso Premium 85-System mit einer Einbautiefe von 85 mm kann in Bezug auf Qualität, Steifigkeit und Stabilität mit den weltweit besten Premium-Profilsystemen mithalten und gleichzeitig einen angemessenen Preis erzielen. Dank drei Dichtungskreisläufen, sieben Kammern im Flügel und Rahmen, einer Außenwanddicke von 2,8 mm, maximaler Energieeinsparung und Funktionalität wird erreicht. Wir empfehlen dieses System ausnahmslos in allen Fällen, wenn es darum geht, die hochwertigsten Materialien mit außergewöhnlichen Eigenschaften und erstklassiger Funktionalität anzuwenden. Ein echtes Premium-Fenster von Glasso ohne Kompromisse." 
    },
];



const Main = props => {
    return (
        <>
            <Slider/>
            
            <Container className='py-5'>
                <Row>
                    <h2 className="text-center">Firma FensterPlus - 19 Jahre Erfahrung</h2>
                </Row>

                <Row>
                    <p className="fst-italic text-center">in der Herstellung von durchscheinenden Strukturen</p>
                </Row>

                <Row className='my-3 mb-5'>
                    {
                        dataNotes.map(item => {
                            return (
                                <DetailsNote 
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                />
                            );
                        })
                    }
                </Row>

                <Row className='my-3'>
                    <h2>FensterPlus-Produkte</h2>
                </Row>

                <Row className='my-3 mb-5'>
                    {
                        dataProducts.map(item => {
                            return (
                                <ProductItem 
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                />
                            );
                        })
                    }
                </Row>
            </Container>
            
            <BottomBar/>
        </>
    );
}

export default Main;