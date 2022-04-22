import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
