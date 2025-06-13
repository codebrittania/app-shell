import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-container">
          <div className="features-inner">
            <div className="feature">
              <div className="feature-title">84%</div>
              <div className="feature-desc">
                Пользователей довольны
                <br />
                скоростью обработки платежей
              </div>
            </div>
            <div className="feature">
              <div className="feature-title">100+</div>
              <div className="feature-desc">Партнёров по всему рынку</div>
            </div>
            <div className="feature">
              <div className="feature-title">2+</div>
              <div className="feature-desc">Года опыта на рынке</div>
            </div>
            <div className="feature">
              <div className="feature-title">БЫСТРОТА</div>
              <div className="feature-desc">
                Расчёты проходят день в день,
                <br />
                отсутствие чарджбэков
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
