import { Card } from "react-bootstrap";

const SlidePreview = props => {
    const {title, description, file} = props;
    
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={file} alt="Slide image" />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default SlidePreview;