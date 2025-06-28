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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    if (isModalOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.documentElement.style.overflow = originalStyle;
    };
  }, [isModalOpen, isMenuOpen]);
  const [usersData, setUsersData] = useState([]);
  const [filteredUsersById, setFilteredUsersById] = useState([]);
  const [query, setQuery] = useState("");
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsersData(json));
  }, []);

  useEffect(() => {
    setCurrentPage(1); 
    if (query.trim() === "") {
      setFilteredUsersById(usersData);
    } else {
      const id = parseInt(query);
      if (!isNaN(id)) {
        const filtered = usersData.filter((user) => user.id === id);
        setFilteredUsersById(filtered);
      } else {
        setFilteredUsersById([]);
      }
    }
  }, [query, usersData]);

  const totalPages = Math.ceil(filteredUsersById.length / itemsPerPage);
  const paginatedUsers = filteredUsersById.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const langRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangMenu = () => setIsLangOpen(!isLangOpen);

  const handleLangSelect = (lang) => {
    setCurrentLang(lang);
    setIsLangOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

          <button className="contact-btn mobile-only" onClick={() => {openModal(), setIsMenuOpen(false);}}>
            Связаться с нами
          </button>
        </nav>

        <button className="contact-btn desktop-only" onClick={openModal}>
          Связаться с нами
        </button>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <h2>Поиск пользователя по ID</h2>

              <input
                type="text"
                placeholder="Введите ID пользователя"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="modal-input"
              />

              <div className="modal-body">
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map((user) => (
                    <div key={user.id} className="user-card">
                      <p>
                        <strong>ID:</strong> {user.id}
                      </p>
                      <p>
                        <strong>Имя:</strong> {user.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {user.email}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>Пользователь не найден</p>
                )}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    ⟨ Назад
                  </button>
                  <span>
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Вперед ⟩
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
