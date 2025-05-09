import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'

createRoot(document.getElementById('demo')).render(
  <StrictMode>
    <App />
    <Header />
  </StrictMode>,
)
