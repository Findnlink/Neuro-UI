import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Docs from './Docs/Docs'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('react-root'))

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Docs />
    </React.StrictMode>
  </BrowserRouter>
)
