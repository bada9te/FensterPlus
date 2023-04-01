import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';


const CertificateAddForm = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // form submit
    const onSubmit = async(data) => {
        const formData = new FormData();
        formData.append('title', data.CertificateTitle);
        formData.append('file', data.File[0]);
        formData.append('what', 'certificate');
        
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
                <Form.Label>Certificate title</Form.Label>
                <Form.Control type="text" placeholder="Enter title"
                    {...register("CertificateTitle", {
                        required: true,
                    })}  
                />
                <Form.Text className="text-muted">
                    {errors.CertificateTitle && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Certificate file</Form.Label>
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
                Add certificate
            </Button>
        </Form>
    );
}

export default CertificateAddForm;