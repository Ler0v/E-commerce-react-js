import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Inicio from './paginas/inicio'
import Sobre from './paginas/m4a1';
import Contact from './paginas/awp';
import ItemListContainer from "./components/ItemListContainer";
import './components/ConsumiendoApis'


function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer />
        <Inicio />
        <Sobre />
        <Contact />
    </div>
  );
}

export default App;
