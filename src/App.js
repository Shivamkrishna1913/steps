import React, { useState } from "react";

import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [Step, setStep] = useState(1);
  const [open, setOpen] = useState(true);
  const handleClickNext = () => {
    setStep((s) => s + 1);
  };
  const handleClickPrevious = () => {
    setStep((s) => s - 1);
  };
  return (
    <>
      <div className="close" onClick={() => setOpen(!open)}>
        &times;
      </div>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={`${Step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${Step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${Step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {Step}:{messages[Step - 1]}
          </p>
          <div className="buttons">
            <button
              disabled={Step === 1}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleClickPrevious}
            >
              Previous
            </button>
            <button
              disabled={Step === 3}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleClickNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
