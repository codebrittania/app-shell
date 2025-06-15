import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section ">
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
                <p>
                  Партнёров по всему <br /> рынку
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-title">2+</div>
              <div className="feature-desc">
                <p>
                  Года опыта на <br /> рынке
                </p>
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
    </section>
  );
};

export default Features;
