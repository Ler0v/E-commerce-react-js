import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './paginas/inicio'
import Sobre from './paginas/sobre';
import Contact from './paginas/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/aboutus' component={Sobre}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
