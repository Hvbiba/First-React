import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Display() {
    const { id } = useParams(); // Use the correct parameter name
    const [product, setProduct] = useState([]); // Initialize product as null

    useEffect(() => {
        const key = 'https://fakestoreapi.com/products';
        fetch(`${key}/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]); // Add id as a dependency

    
    return (
        <div id="displayProduct" className="container">
             <img src={product.image} className="card-img-top" alt={product.title} />
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h5 className="price">Price: {`${product.price} $`}</h5>
                </div>
        </div>
    );
}

export default Display;
