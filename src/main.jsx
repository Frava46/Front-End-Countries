import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Components/Redux/store.js'
import axios from 'axios'

// axios.defaults.baseURL="http://localhost:3001"
axios.defaults.baseURL="https://back-end-countries-dev-mhqx.3.us-1.fl0.io"


ReactDOM.createRoot(document.getElementById('root')).render(
  
   <Provider store = {store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider> ,
)
