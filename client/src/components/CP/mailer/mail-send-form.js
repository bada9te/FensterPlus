import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';


const MailSendForm = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // form submit
    const onSubmit = async(data) => {
        const formData = new FormData();
        formData.append('subject', data.Subject);
        formData.append('title', data.Title);
        formData.append('body', data.Body);
        formData.append('attachments', data.Attachments);
        
        const result = await axios.post('/send-email', formData);
        if (result.data.done) {
            alert("Done")
        } else {
            alert("Error")
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Email subject</Form.Label>
                <Form.Control type="text" placeholder="Enter title"
                    {...register("Subject", {
                        required: true,
                    })}  
                />
                <Form.Text className="text-muted">
                    {errors.Subject && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Email title</Form.Label>
                <Form.Control type="text" placeholder="Enter title"
                    {...register("Title", {
                        required: true,
                    })}  
                />
                <Form.Text className="text-muted">
                    {errors.Title && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Email text</Form.Label>
                <Form.Control as="textarea" rows={3} 
                    {...register("Body", {
                        required: true,
                    })} 
                />
                
                <Form.Text className="text-muted">
                    {errors.Body && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Attachments</Form.Label>
                <Form.Control type="file" multiple
                    {...register("Files", {
                        required: true,
                    })}
                />
                <Form.Text className="text-muted">
                    {errors.Files && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>

            
            <Button variant="primary" type="submit" className="mt-1">
                Send to all subscribers
            </Button>
        </Form>
    );
}

export default MailSendForm;