import './App.css';
import "./App.css"
import Home from './componentes/Home'
import Header from './componentes/Header';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {AppProvider} from './context/ContextApp'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <AppProvider>
        <main>
          <Header />
          <Routes>
          <Route path='/' element={<Home/>}/>
          </Routes>
       
        </main>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
