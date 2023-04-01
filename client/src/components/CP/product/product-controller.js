import { Card } from "react-bootstrap";
import ProductAddForm from "./product-add-form";
import ProductList from "./product-list";


const ProductController = props => {
    return (
        <>
            <Card className="p-0">
                <Card.Header>
                    Product
                </Card.Header>
                <Card.Body>
                    <h1>Add product</h1>
                    <ProductAddForm/>
                    <hr/>
                    <h1>List of products</h1>
                    <ProductList/>
                </Card.Body>
            </Card>
        </>
    );
}

export default ProductController;