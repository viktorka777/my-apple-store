import React, { useState } from 'react';
import './Form.css'; // Загальні стилі для форм

function AddProductForm({ language }) {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: 0,
    category: ''
  });

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Додатковий код для відправлення даних про товар на сервер
    console.log(productData); // Тимчасове відображення даних в консолі
    // Очистити форму після відправлення
    setProductData({
      name: '',
      description: '',
      price: 0,
      category: ''
    });
  };

  return (
    <div className="form-container">
      <h2>{language === 'UA' ? 'Додати товар' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{language === 'UA' ? 'Назва товару' : 'Product Name'}</label>
          <input type="text" id="name" name="name" value={productData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">{language === 'UA' ? 'Опис' : 'Description'}</label>
          <textarea id="description" name="description" value={productData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="price">{language === 'UA' ? 'Ціна' : 'Price'}</label>
          <input type="number" id="price" name="price" value={productData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="category">{language === 'UA' ? 'Категорія' : 'Category'}</label>
          <select id="category" name="category" value={productData.category} onChange={handleChange} required>
            <option value="" disabled hidden>{language === 'UA' ? 'Виберіть категорію' : 'Select category'}</option>
            <option value="fruit">{language === 'UA' ? 'Фрукти' : 'Fruit'}</option>
            <option value="vegetable">{language === 'UA' ? 'Овочі' : 'Vegetable'}</option>
            {/* Додайте інші категорії, які вам потрібні */}
          </select>
        </div>
        <button type="submit">{language === 'UA' ? 'Додати' : 'Add'}</button>
      </form>
    </div>
  );
}

export default AddProductForm;
