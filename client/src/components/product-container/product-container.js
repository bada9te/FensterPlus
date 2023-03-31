import ProductItem from "../product-item/product-item";
import axios from "axios";
import { useEffect, useState } from "react";


const ProductContainer = props => {
    const [productsData, setProductsData] = useState([]);

    const getData = async() => {
        const result = await axios.get('/get/products');
        setProductsData(result.data.data);
    }

    useEffect(() => {
        getData();
    });

    return (
        <>
            {
                productsData.length !== 0
                ?
                productsData.map((item, key) => {
                    return (
                        <ProductItem 
                            image={item.preview}
                            title={item.title}
                            description={item.description}
                            key={key}
                        />
                    );
                })
                :
                null
            }
        </>
    );
}

export default ProductContainer;