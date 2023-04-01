import { Card } from "react-bootstrap";
import SliderAddForm from "./slide-add-form";
import SlideList from "./slide-list";


const SliderController = props => {
    return (
        <>
            <Card className="p-0">
                <Card.Header>
                    Slider
                </Card.Header>
                <Card.Body>
                    <h1>Add slide</h1>
                    <SliderAddForm/>
                    <hr/>
                    <h1>List of slides</h1>
                    <SlideList/>
                </Card.Body>
            </Card>
        </>
    );
}

export default SliderController;