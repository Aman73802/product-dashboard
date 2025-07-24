import React, { useState } from "react";
import "../pages/addProduct.css"; 

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product:", form);
    alert("Product added (mocked)");

   
    setForm({
      title: "",
      price: "",
      image: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="add-product-wrapper">
      <div className="container">
        <h2 className="heading">Add New Product (Mock)</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="input"
            required
          />
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="input"
            required
          />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="input"
            required
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="input"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="textarea"
            required
          />
          <button type="submit" className="button">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
