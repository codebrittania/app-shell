import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import "./Header.css";

const languages = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.documentElement.style.overflow = originalStyle;
    };
  }, [ isMenuOpen]);
  const [usersData, setUsersData] = useState([]);
  const [filteredUsersById, setFilteredUsersById] = useState([]);
  const [query, setQuery] = useState("");
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;




  const langRef = useRef();

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

        <button className={`menu-toggle ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
          <FaBars />
        </button>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <button className="mobile-close-btn" onClick={toggleMenu}>
            <FaTimes />
          </button>
          <a href="#about">Почему мы</a>
          <a href="#">Наши сервисы</a>
          <a href="#portfolio">Платежные решения</a>
          <div
            className={`lang-switcher ${isLangOpen ? "open" : ""}`}
            ref={langRef}
          >
            <button className="lang-btn" onClick={toggleLangMenu}>
              {currentLang.label}
              <FaChevronDown className="lang-arrow" />
            </button>
            {isLangOpen && (
              <div className="lang-dropdown">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`lang-option ${
                      currentLang.code === lang.code ? "active" : ""
                    }`}
                    onClick={() => handleLangSelect(lang)}
                  >
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="contact-btn mobile-only" onClick={() => window.open("https://t.me/coo_cryptura", "_blank")}>
            Связаться с нами
          </button>
        </nav>

        <button className="contact-btn desktop-only" onClick={() => window.open("https://t.me/coo_cryptura", "_blank")}>
          Связаться с нами
        </button>

      </div>
    </header>
  );
};

export default Header;
