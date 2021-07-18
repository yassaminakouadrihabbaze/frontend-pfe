import styled from 'styled-components';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Products from './Components/Products';
import { productData } from './Components/Products/data';
import Type from './Components/Categories'
import Footer from './Components/Footer';
import Connecter from './Components/Connecter';
import Subscribe from './Components/Subscribe';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'

import FormulaireSubs from './Components/Subscribe';
import GestionCategories from './Components/GestionCategories';
function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <div className="content">
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/connecter'><Connecter /></Route>
          <Route  exact path='/subscribe'><Subscribe/></Route>
        </Switch>

      </div>
      
      
      <FormulaireSubs></FormulaireSubs>
      <GestionCategories></GestionCategories>
      <Footer></Footer>
     
      
    </div>
    </Router>
  );
}

export default App;
