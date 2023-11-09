import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { Quiz } from './pages/Quiz'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Quiz />
  </React.StrictMode>,
)
