import React from "react";

const Question = ({ question, handleAnswerOptionClick }) => {
  return (
    <>
      <div className="question-section">
        <div className="question-text">
          <h1>{question.pergunta}</h1>
        </div>
      </div>

      <div className="answer-section">
        {Object.entries(question)
          .splice(2, 3)
          .map(([key, value]) => (
            <button onClick={() => handleAnswerOptionClick(key)}>
              {value}
            </button>
          ))}
      </div>
    </>
  );
};

export default Question;
