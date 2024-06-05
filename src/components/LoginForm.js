import React, { useState } from 'react';
import './Form.css'; // Загальні стилі для форм

function LoginForm({ language }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Додатковий код для обробки відправлення форми
  };

  return (
    <div className="form-container">
      <h2>{language === 'UA' ? 'Вхід' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">{language === 'UA' ? 'Електронна пошта' : 'Email'}</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">{language === 'UA' ? 'Пароль' : 'Password'}</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">{language === 'UA' ? 'Увійти' : 'Login'}</button>
      </form>
    </div>
  );
}

export default LoginForm;
