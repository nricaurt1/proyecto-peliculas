import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.js"
import "@fortawesome/fontawesome/css/all.css"
import "@fortawesome/fontawesome/css/all.css"
import "bootstrap-icons/font/css/bootstrap-icons.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
