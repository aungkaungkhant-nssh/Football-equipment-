import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './MainRouter'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css"
import {Toaster} from 'react-hot-toast';
function App() {

  return (
    <BrowserRouter>
        <MainRouter />
        <Toaster />
    </BrowserRouter>
  )
}

export default App
