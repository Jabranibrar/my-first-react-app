import logo from '../assets/images/logo-1.svg';
import './App.css'
import Myproject from '../Myproject/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Component/Header/navbar"
import Footer from "../Component/footer/footer"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from '../Myproject/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/"> 
          <Myproject/>
          </Route>
          <Route exact path="/contact"> 
          <Contact/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
