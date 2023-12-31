import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyled } from './styles/GlobalStyled.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
