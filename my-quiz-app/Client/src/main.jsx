import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
import store from './Redux/Store.jsx';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
