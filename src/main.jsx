import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {GoogleOAuthProvider} from '@react-oauth/google'
import {store} from './Stores/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId='719110131805-gttrn27olhkceghj09rnrid8qvps46lr.apps.googleusercontent.com'>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GoogleOAuthProvider>
  </Provider>
)
