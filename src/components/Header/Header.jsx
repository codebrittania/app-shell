import React, { useEffect, useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import "./Header.css";

const languages = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lang, setLang] = useState(languages[0]);
  const ref = useRef();
  const [usersData, setUsersData] = useState([]);
  const [filteredUsersById, setFilteredUsersById] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleClick = (e) =>
      ref.current && !ref.current.contains(e.target) && setIsOpen(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsersData(json));
  }, []);

  useEffect(() => {
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

  const selectLang = (l) => {
    setLang(l);
    setIsOpen(false);
  };
  return (
    <header className="">
      <div className="container header">
        <div className="logo">
          <a href="/">
            <img src="/logo.svg" alt="Cryptura logo" width="120" />
          </a>
        </div>

        <nav className="nav">
          <a href="#about">Почему мы</a>
          <a href="#">Наши сервисы</a>
          <a href="#portfolio">Платежные решения</a>
          <div className="lang-switcher" ref={ref}>
            <button
              className={`lang-btn ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen((o) => !o)}
            >
              <span className="flag">{lang.flag}</span> {lang.label}
              <MdArrowDropDown className="arrow-icon" />
            </button>

            {isOpen && (
              <div className="lang-menu">
                {languages.map((l) => (
                  <div
                    key={l.code}
                    className="lang-item"
                    onClick={() => selectLang(l)}
                  >
                    <span className="flag"></span> {l.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button className="contact-btn" onClick={() => setIsModalOpen(true)}>
          Связаться с нами
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h3>Наши контакты</h3>
            <div className="users-list">
              <input
                type="text"
                placeholder="Поиск по ID"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="styled-input"
              />
              {filteredUsersById.map((user) => (
                <div key={user.id} className="user-card">
                  <h4>{user.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
