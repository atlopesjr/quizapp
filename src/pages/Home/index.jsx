import React, { useState, useEffect } from 'react'
import './styles.css'

import { Header } from '../../components/Header'

export function Home() {
  const [userName, setUserName] = useState('usuário')
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list')
      .then(response => response.json())
      .then(data => {
        setQuestions(data.data)
      })
  }, [])

  return (
    <>
      <Header username={userName}/>
      <div className='container'>
        <h1>Nome</h1>
        <input type="text" placeholder="Insira seu nome..." onChange={e => setUserName(e.target.value)}/>
        <button type="button" onClick={setUserName}>acessar</button>
      </div>
    </>
  )
}
