import './App.css';
import "./App.css"
import Home from './componentes/Home'
import Header from './componentes/Header';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {AppProvider} from './context/ContextApp'
import Modal from './componentes/Modal';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <AppProvider>
        <div className='container'>
          <Header />
          <Home/>
        </div>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
