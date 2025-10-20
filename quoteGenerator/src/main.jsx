import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QuoteGenerator from './QuoteGenerator.jsx'
import './QuoteGenerator.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuoteGenerator />
  </StrictMode>,
)
