import ProductItem from "../product-item/product-item";
import products from "../../data/products";


const ProductContainer = props => {
    return (
        <>
            {
                products.map((item, key) => {
                    return (
                        <ProductItem 
                            preview={item.preview}
                            details={item.details}
                            title={item.title}
                            description={item.description}
                            key={key}
                        />
                    );
                })
            }
        </>
    );
}

export default ProductContainer;