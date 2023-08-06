import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './MainRouter'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <BrowserRouter>
        <MainRouter />
        <ToastContainer />
    </BrowserRouter>
  )
}

export default App
