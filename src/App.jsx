import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Nav/Navbar'
import './components/Api/ConsumiendoApis'
import ItemListContainer from "./components/Product/ItemListContainer";
import ItemDetailContainer from "./components/Product/ItemDetailContainer";


function App() {
  return (
    <div className="App">
        <BrowserRouter>

          <Navbar />
          
          <Routes>
            <Route path="/" element={<ItemListContainer />} />  
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path= '/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>

        </BrowserRouter>
       
    </div>
  );
}

export default App;

