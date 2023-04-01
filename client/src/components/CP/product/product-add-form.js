import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';


const ProductAddForm = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // form submit
    const onSubmit = async(data) => {
        const formData = new FormData();
        formData.append('title', data.ProductTitle);
        formData.append('description', data.ProductDescription);
        formData.append('category', data.Category);
        formData.append('file1', data.FilePreview[0]);
        formData.append('file2', data.FileDetails[0]);
        formData.append('what', 'product');
        
        const result = await axios.post('/upload-multiple-fields', formData);
        if (result.data.done) {
            alert("File successfully uploaded")
        } else {
            alert("Error")
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Product title</Form.Label>
                <Form.Control type="text" placeholder="Enter title"
                    {...register("ProductTitle", {
                        required: true,
                    })}  
                />
                <Form.Text className="text-muted">
                    {errors.ProductTitle && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Product description</Form.Label>
                <Form.Control as="textarea" rows={3} 
                    {...register("ProductDescription", {
                        required: true,
                    })} 
                />
                
                <Form.Text className="text-muted">
                    {errors.ProductDescription && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Product description</Form.Label>
                <Form.Select 
                    {...register("Category", {
                        required: true,
                    })} 
                >
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                </Form.Select>
                
                <Form.Text className="text-muted">
                    {errors.Category && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>


            <Form.Group>
                <Form.Label>Product preview file</Form.Label>
                <Form.Control type="file"
                    {...register("FilePreview", {
                        required: true,
                    })}
                />
                <Form.Text className="text-muted">
                    {errors.FilePreview && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Product details file</Form.Label>
                <Form.Control type="file"
                    {...register("FileDetails", {
                        required: true,
                    })}
                />
                <Form.Text className="text-muted">
                    {errors.FileDetails && <span className="form-text text-danger">This field is required</span>}
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit" className="mt-4">
                Add product
            </Button>
        </Form>
    );
}

export default ProductAddForm;