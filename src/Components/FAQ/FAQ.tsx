import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the process for designing a house?",
      answer: "Answer is 42",
    },
    {
      question: "What materials do you use in construction?",
      answer: "We use high-quality materials.",
    },
    {
      question: "How long does it take to build a country house?",
      answer: "It typically takes 6-12 months.",
    },
    {
      question: "Can changes be made to the design during construction?",
      answer: "Yes, we allow some changes during construction.",
    },
    {
      question: "Do you provide a warranty on your homes?",
      answer: "Yes, we offer a warranty on our builds.",
    },
  ];

  return (
    <div className="FAQ-container">
      <div className="FAQ-info-container">
        <h2>FAQ</h2>
        <ul className="FAQ-info-list-container">
          {faqs.map((faq, index) => (
            <li
              className="FAQ-info-list-item"
              key={index}
              onClick={() => toggleAnswer(index)}
            >
              <div className="question">{faq.question}</div>
              <div className={`answer ${openIndex === index ? "open" : ""}`}>
                {faq.answer}
              </div>
            </li>
          ))}
          <li className="FAQ-info-list-item">
            <a href="#" className="link">
              More FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="FAQ-form-container">
        <h4>Do You have any questions?</h4>
        <p>
          You can feel free to ask us any questions and we will answer you as
          soon as possible
        </p>
        <input className="FAQ-form-input" type="email" placeholder="EMAIL" />
        <textarea name="description" id="descriptionArea" rows={4}></textarea>
        <div className="FAQ-form-button-container">
          <div className="FAQ-form-button-checkbox-container">
            <input className="checkbox" type="checkbox"></input>
            <p className="FAQ-form-policy">
              By clicking on the button you agree to the privacy policy
            </p>
          </div>
          <button className="FAQ-form-button">Send</button>
        </div>
      </div>
    </div>
  );
};
