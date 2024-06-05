import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppleList from './components/AppleList';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import AssortmentPage from './components/AssortmentPage';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBasket, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [language, setLanguage] = useState('UA');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const navItems = {
    UA: ['Про нас', 'Контакт', 'Категорія', 'Блог', 'Новини'],
    EN: ['About', 'Contact', 'Category', 'Blog', 'News']
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="top-bar">
            <div className="language-select">
              <a href="#ua" onClick={() => toggleLanguage('UA')}>UA</a> | <a href="#en" onClick={() => toggleLanguage('EN')}>EN</a>
            </div>
            <div className="account-options">
              <Link to="/signup"><FontAwesomeIcon icon={faUser} className="icon-spacing" /> {language === 'UA' ? 'Мій обліковий запис' : 'My Account'}</Link>
              <Link to="/login"><FontAwesomeIcon icon={faLock} className="icon-spacing" /> {language === 'UA' ? 'Увійти' : 'Login'}</Link>
            </div>
          </div>
          <div className="main-header">
            <div className="logo-container">
              <img src={logo} className="App-logo" alt="logo" style={{ width: '200px', height: '200px' }} />
              <h1 style={{ color: '#8bc34a', margin: '0' }}>ФрутБар</h1>
            </div>
            <div className="search-bar">
              <input type="text" placeholder={language === 'UA' ? 'Пошук' : 'Search'} />
              <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className="basket-container">
              <div className="basket-icon">
                <a href="#basket" className="green-text"><FontAwesomeIcon icon={faShoppingBasket} className="icon-spacing" /> {language === 'UA' ? 'Кошик (0)' : 'Basket (0)'}</a>
              </div>
              <div className="order-summary">
                <p style={{ color: '#ccc', fontSize: 'small' }}>{language === 'UA' ? 'Загальна сума: 0 грн' : 'Total: 0 UAH'}</p>
              </div>
            </div>
          </div>
          <nav>
            <ul className="nav-items">
              <li><Link to="/">{language === 'UA' ? 'Головна' : 'Home'}</Link></li>
              {navItems[language].map((item, index) => (
                <li key={index}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
              ))}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<AppleList />} />
            <Route path="/assortment" element={<AssortmentPage />} />
            <Route path="/signup" element={<SignupForm language={language} />} />
            <Route path="/login" element={<LoginForm language={language} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
