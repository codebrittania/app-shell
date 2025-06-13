import React from "react";
import "./HeroSection.css";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="hero">
          <div className="hero_info">
            <h1 className="hero_text">Добро Пожаловать в Cryptura</h1>
            <p className="hero_description">
              Инновационная P2P платежная система, созданная для удобства и
              безопасности расчетов в цифровом мире. Мы предлагаем надежные
              решения для онлайн-платежей, позволяя пользователям легко и быстро
              совершать финансовые операции.
            </p>
            <a href="#join" className="hero_button">
              Присоединиться сейчас <FiArrowRight className="arrow"/>
            </a>

            <div className="clients">
              <div class="avatars">
                <img src="/people.png" alt="users" class="avatar" />
              </div>
              <div className="clients_info">
                <span>1000+</span>
                <p>Активных пользователей и клиентов по всему миру</p>
              </div>
            </div>
          </div>
          <div className="hero_image">
            <img src="/hero_image-card.svg" alt="card" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
