import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import Navbar from './components/Navbar'
import Inicio from './paginas/inicio'
import Sobre from './paginas/sobre';
import Contact from './paginas/contact';
import ItemListContainer from "./components/ItemListContainer";

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
