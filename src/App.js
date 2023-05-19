import logo from './logo.svg';
import './App.css';
import Login from '../src/component/Login/Loggin'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from './component/Header/header';
import BackgroudImage from './component/backgroundImage/backgroudImage';
import './/translate/i118'
import Content from './component/content/content';

function App() {
  return (
    <div >
      
      <Header />
      <BackgroudImage />
      <Content />
    </div>
  );
}

export default App;

