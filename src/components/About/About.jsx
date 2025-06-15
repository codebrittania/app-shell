import React from "react";
import { MdAnalytics, MdPieChart, MdShield } from "react-icons/md";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">Почему именно мы?</h2>
        <div className="about-container">
          <div className="about-item">
            <MdShield className="about-icon" />
            <div className="about-text">
              <h4>Безопасность</h4>
              <p>
                Мы используем передовые
                <br /> технологии шифрования и защиты, чтобы каждая транзакция
                была максимально защищена от мошенничества.
              </p>
            </div>
          </div>
          <div className="about-item">
            <MdPieChart className="about-icon" />
            <div className="about-text">
              <h4>Простота в использовании</h4>
              <p>
                Интуитивно понятный интерфейс и доступность на разных
                устройствах делают использование Cryptura удобным и простым даже
                для новичков. Осуществляйте платежи всего в несколько кликов.
              </p>
            </div>
          </div>
          <div className="about-item">
            <MdAnalytics className="about-icon" />
            <div className="about-text">
              <h4>Поддержка клиентов 24/7</h4>
              <p>
                Наша служба поддержки работает круглосуточно, чтобы помочь вам в
                любое время. Нужна помощь или возникли вопросы? Мы всегда рядом!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
