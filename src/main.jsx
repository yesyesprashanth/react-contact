import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ContactProvider from './Store/ContactProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </React.StrictMode>,
)
