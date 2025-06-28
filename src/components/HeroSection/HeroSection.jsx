import { motion } from "framer-motion";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="hero">
          <div className="hero_info">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .9 }}
            >
              <h1 className="hero_text">Добро пожаловать в <span> Cryptura</span></h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1  }}
            >
              <p className="hero_description">
                Инновационная P2P платежная система, созданная для удобства и
                безопасности расчетов в цифровом мире. Мы предлагаем надежные
                решения для онлайн-платежей, позволяя пользователям легко и
                быстро совершать финансовые операции.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1  }}
            >
              <a href="#join" className="hero_button">
                Присоединиться сейчас <FiArrowRight className="arrow" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              <div className="clients">
                <div className="avatars">
                  <img src="/people.png" alt="users" className="avatar" />
                </div>
                <div className="clients_info">
                  <span>1000+</span>
                  <p>Активных пользователей и клиентов по всему миру</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="hero_image">
            <motion.img
              src="/credit-card.png"
              alt="card"
              initial={{ opacity: 1, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .9 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
