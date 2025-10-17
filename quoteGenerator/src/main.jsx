import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './QuoteGenerator.css'
import QuoteGenerator from './QuoteGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuoteGenerator />
  </StrictMode>,
)
