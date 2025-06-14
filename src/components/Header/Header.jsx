import React, { useState, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef();

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ];
  const [currentLang, setCurrentLang] = useState(languages[0]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangMenu = () => setIsLangOpen(!isLangOpen);

  const handleLangSelect = (lang) => {
    setCurrentLang(lang);
    setIsLangOpen(false);
  };
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a href="/">
            <img src="/logo.svg" alt="Logo" width="120" />
          </a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#about">Почему мы</a>
          <a href="#">Наши сервисы</a>
          <a href="#portfolio">Платежные решения</a>
          <div className="lang-switcher" ref={langRef}>
            <button className="lang-btn" onClick={toggleLangMenu}>
              {currentLang.label}
              <FaChevronDown className="lang-arrow" />
            </button>
            {isLangOpen && (
              <div className="lang-dropdown">
                {languages.map(lang => (
                  <div
                    key={lang.code}
                    className={`lang-option ${currentLang.code === lang.code ? 'active' : ''}`}
                    onClick={() => handleLangSelect(lang)}
                  >
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button className="contact-btn">Связаться с нами</button>
      </div>
    </header>
  );
};

export default Header;
