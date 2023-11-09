import React, { useState, useEffect } from 'react'
import './styles.css'

export function Quiz() {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [wrong, setWrong] = useState(0)
    const [percent, setPercent] = useState(0)

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect == "resposta_correta") {
            setScore(score + 1)
        } else {
            setWrong(wrong + 1)
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setTimeout(setCurrentQuestion(nextQuestion), 2000)
        } else {
            setPercent((score/questions.length)*100)
            setShowScore(true)
        }
    }

    useEffect(() => {
        async function fetchData(){
            const response = await fetch('https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list')
            const data = await response.json()
            setQuestions(data.data)
        }
        fetchData()
    }, [])

    return(
        <div className='quiz'>
            {showScore ? (
                <div className='score-section'>
                    <h1>score</h1>
                    <div className='correct-section'>
                        <strong>Acertos</strong>
                        <strong>{score}</strong>
                    </div>
                    <div className='wrong-section'>
                        <strong>Erros</strong>
                        <strong>{wrong}</strong>
                    </div>
                    <div className='percent-section'>
                        <strong>Porcentagem</strong>
                        <strong>{percent}%</strong>
                    </div>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-text'>
                            <h1>{questions[currentQuestion].pergunta}</h1>
                        </div>
                    </div>
                    <div className='answer-section'>
                        {Object.entries(questions[currentQuestion]).splice(2,3).map(([key, value]) => (
                            <button onClick={() => handleAnswerOptionClick(key)}>{value}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
