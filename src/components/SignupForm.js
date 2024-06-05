import React, { useState } from 'react';
import './Form.css'; // Загальні стилі для форм

function SignupForm({ language }) {
  const [formData, setFormData] = useState({
    name: '',
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
      <h2>{language === 'UA' ? 'Реєстрація' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{language === 'UA' ? 'Ім\'я' : 'Name'}</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">{language === 'UA' ? 'Електронна пошта' : 'Email'}</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">{language === 'UA' ? 'Пароль' : 'Password'}</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">{language === 'UA' ? 'Зареєструватися' : 'Sign Up'}</button>
      </form>
    </div>
  );
}

export default SignupForm;
