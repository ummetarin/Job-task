import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainPart from './Components/Mainfile/MainPart';
import SignUp from './Components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainPart></MainPart>,
  },{
    path:'/signup',
    element:<SignUp></SignUp>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
