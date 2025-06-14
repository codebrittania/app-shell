import { motion } from "framer-motion";
import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <motion.section
      className="features-section"
      initial={{ opacity: 0, y: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .6 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="features-container">
          <div className="features-inner">
            <div className="feature">
              <div className="feature-title">84%</div>
              <div className="feature-desc">
                <p>
                  Пользователей довольны
                  <br />
                  скоростью обработки платежей
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-title">100+</div>
              <div className="feature-desc">
                <p>Партнёров по всему рынку</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-title">2+</div>
              <div className="feature-desc">
                <p>Года опыта на рынке</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-title">БЫСТРОТА</div>
              <div className="feature-desc--last">
                <p>
                  Расчёты проходят день в день,
                  <br />
                  отсутствие чарджбэков
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
