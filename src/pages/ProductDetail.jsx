import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/Ui/Button";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="p-4">Loading product...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 object-contain bg-white p-4 border rounded-lg"
      />
      <div>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
        <p className="text-green-600 font-bold text-xl mb-4">${product.price}</p>
        <p className="text-sm text-gray-700 mb-6">{product.description}</p>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
