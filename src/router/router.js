import { createBrowserRouter } from "react-router-dom";
import App from "..//App";
import UserAll from "../component/UserAll/UserAll";
import Header from '../component/Header/header'
import Login from "../component/Login/Loggin";
export const router = createBrowserRouter([
  {
    path: "/userAll",
    element: <UserAll />,
  },

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  
]);
