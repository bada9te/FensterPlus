import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';


const SliderAddForm = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // form submit
    const onSubmit = async(data) => {
        const formData = new FormData();
        formData.append('title', data.SlideTitle);
        formData.append('description', data.SlideDescription);
        formData.append('file', data.File[0]);
        formData.append('what', 'slide');
        
        const result = await axios.post('/upload-single', formData);
        if (result.data.done) {
            alert("File successfully uploaded")
        } else {
            alert("Error")
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Slide title</Form.Label>
                <Form.Control type="text" placeholder="Enter title"
                    {...register("SlideTitle", {
                        required: true,
                    })}  
                />
                <Form.Text className="text-muted">
                    {errors.SlideTitle && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Slide description</Form.Label>
                <Form.Control as="textarea" rows={3} 
                    {...register("SlideDescription", {
                        required: true,
                    })} 
                />
                
                <Form.Text className="text-muted">
                    {errors.SlideDescription && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>


            <Form.Group>
                <Form.Label>Slide image file</Form.Label>
                <Form.Control type="file"
                    {...register("File", {
                        required: true,
                    })}
                />
                <Form.Text className="text-muted">
                    {errors.File && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit" className="mt-4">
                Add slide
            </Button>
        </Form>
    );
}

export default SliderAddForm;