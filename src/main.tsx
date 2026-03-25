import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const style = document.createElement('style')
style.textContent = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #F5F5F0;
    display: flex;
    justify-content: center;
  }
`
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
