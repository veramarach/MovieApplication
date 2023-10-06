import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import Index from './Routes/AllRoutes.tsx'
// import App from './App.tsx'
// import './index.css'
import GlobalStyles from './assets/GlobalStyles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router ={Index} />
  </React.StrictMode>,
)
