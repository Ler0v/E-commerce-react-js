import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Nav/Navbar'
import ItemListContainer from "./components/Product/ItemListContainer";
import ItemDetailContainer from "./components/Product/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CustomCartContext from "./components/Context/CustomCartContext";


function App() {
  return (
    <div className="App">

      <CustomCartContext>
        
        <BrowserRouter>

          <Navbar />
          
          
          <Routes>
            <Route path="/" element={<ItemListContainer />} />  
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path= '/item/:id' element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart />} /> 
          </Routes>

        </BrowserRouter>
      
      </CustomCartContext>
       
    </div>
  );
}

export default App;

