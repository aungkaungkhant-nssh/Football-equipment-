import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './MainRouter'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css"
function App() {

  return (
    <BrowserRouter>
        <MainRouter />
    </BrowserRouter>
  )
}

export default App
