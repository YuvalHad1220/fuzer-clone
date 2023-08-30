import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MainTheme from './MainTheme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainTheme>
      <App />
    </MainTheme>
  </React.StrictMode>,
)
