import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

function renderApp() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

renderApp()

if (import.meta.hot) {
  import.meta.hot.accept('./App', () => {
    renderApp()
  })
}
