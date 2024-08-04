import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  // Get all products
  const getProducts = () => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Set the filtered products initially to all products
      })
      .catch((error) => console.error('Error fetching products:', error));
  };

  // Get all categories
  const getCategories = () => {
    const url = 'https://fakestoreapi.com/products/categories';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error('Error fetching categories:', error));
  };

  // Filter products by category
  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <div className="container" id="Btns">
        <button
          className="btn btn-link-dark-opacity-100"
          onClick={() => handleCategoryClick('All')}
        >
          All Products
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className="btn btn-link-dark-opacity-100"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="container" id="cards">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
              <img src={product.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h5 className="price">Price: {`${product.price} $`}</h5>
                <Link to={`/product/${product.id}`} id="display-btn" className="btn btn-dark">Display Product</Link>
              </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
