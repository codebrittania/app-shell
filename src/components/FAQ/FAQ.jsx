import React, { useState } from "react";
import "./FAQ.css";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item">
    <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
      <span>{question}</span>
      <svg
        className={`chevron ${isOpen ? "rotate" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path stroke="currentColor" strokeWidth="2" d="M6 9l6 6 6-6" />
      </svg>
    </button>
    <div className={`faq-answer ${isOpen ? "open" : ""}`}>
      <p>{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqItems = [
    {
      question: "Отмена сделок",
      answer:
        "Все сделки отменяются самостоятельно трейдером! Кнопку «я оплатил»  рекомендуем нажимать только по факту оплаты Нажатие кнопки «я оплатил»  без прикрепления подтверждения не освобождает вас от ответственности,  за это мы будем вынуждены ввести более жесткие ограничения (вплоть  до снятия статуса мерчанта на 24ч).",
    },
    {
      question: "Передача аккаунта",
      answer:
        "Все сделки отменяются самостоятельно трейдером! Кнопку «я оплатил»  рекомендуем нажимать только по факту оплаты Нажатие кнопки «я оплатил»  без прикрепления подтверждения не освобождает вас от ответственности,  за это мы будем вынуждены ввести более жесткие ограничения (вплоть  до снятия статуса мерчанта на 24ч).",
    },
    {
      question: "Пополнение баланса",
      answer:
        "Все сделки отменяются самостоятельно трейдером! Кнопку «я оплатил»  рекомендуем нажимать только по факту оплаты Нажатие кнопки «я оплатил»  без прикрепления подтверждения не освобождает вас от ответственности,  за это мы будем вынуждены ввести более жесткие ограничения (вплоть  до снятия статуса мерчанта на 24ч).",
    },
  ];

  return (
    <div className="faq-div">
      <h3 className="section-title">FAQs</h3>
      <div className="faq-container ">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
