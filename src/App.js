import './App.css';
import "./App.css"
import Home from './componentes/Home'
import SideBar from './componentes/SideBar';
import Header from "./componentes/Header";
import Search from "./componentes/Search"
function App() {
  return (
    <div className='App'>
        <div className='container'>
        <Header />
        <Search />
        <Home />
        </div>
    </div>
  )
}

export default App;
