import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Ui/Button";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />
      <h3 className="product-card-title">{product.title}</h3>
      <p className="product-card-category">{product.category}</p>
      <p className="product-card-price">${product.price}</p>
      <div className="product-card-actions">
        <Link to={`/product/${product.id}`}>
          <Button className="product-card-btn view">View</Button>
        </Link>
        <Button
          onClick={() => onAddToCart(product)}
          className="product-card-btn cart"
        >
          Add to Cart
        </Button>
      </div>
    
      <footer className="home-footer">
        © {new Date().getFullYear()} Productify. All rights reserved.
      </footer>
    </div>
    );
};
 

export default ProductCard;
