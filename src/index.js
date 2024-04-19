import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './routes/Home';
import Clientes from './routes/Clientes';
import Produtos from './routes/Produtos';
import ErroPage from './routes/ErroPage';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Home/>
//   }
// ])

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErroPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "clientes",
        element: <Clientes/>
      },
      {
        path: "produtos",
        element: <Produtos/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
