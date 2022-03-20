import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Nav/Navbar'
import Inicio from './paginas/inicio'
import Sobre from './paginas/sobre';
import Contact from './paginas/contacto';
import './components/Api/ConsumiendoApis'


function App() {
  return (
    <div className="App">
        <BrowserRouter>

          <Navbar />
          
          <Routes>
            <Route path="/inicio" element={<Inicio />} />  
            <Route path="/sobre" element={<Sobre />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="*" element={ <Navigate to="/" />}/>
          </Routes>

        </BrowserRouter>
       
    </div>
  );
}

export default App;
