import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// import "boostrap/package.json"
// import "bootstrap/dist/js/bootstrap.bundle.js"
// import "boostrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './COMPONENTS/Redux/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
