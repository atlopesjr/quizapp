import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { Header } from "../../components/Header";
import "./styles.css";
import Score from "./Score";
import Question from "./Question";

export function Quiz() {
  const { auth } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [percent, setPercent] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect == "resposta_correta") {
      setScore(score + 1);
    } else {
      setWrong(wrong + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(setCurrentQuestion(nextQuestion), 2000);
    } else {
      setPercent((score / questions.length) * 100);
      setShowScore(true);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list"
      );
      const data = await response.json();
      setQuestions(data.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <Header username={auth.username} />
      <div className="quiz">
        {isLoading && <h1>Carregando...</h1>}

        {!isLoading && showScore && (
          <Score questionsQuantity={questions.length} correctAnswer={score} />
        )}

        {!isLoading && !showScore && (
          <Question
            question={questions[currentQuestion]}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        )}
      </div>
    </>
  );
}
