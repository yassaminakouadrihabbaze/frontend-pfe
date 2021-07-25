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
import Screen from "../src/Components/screen";
import FormulaireSubs from './Components/Subscribe';
import GestionCategories from './Components/GestionCategories';
import ProductsDetails from './Components/ProductsDetails';
import { useState } from 'react';
import AddProduct from './Components/AddProduct';
function App() {
 const [category, setCategory] = useState(null);
 const handleSetCategory = (val) => setCategory(val);
  return (
    <Router>
    <div className="App">
      <Header setCategory={handleSetCategory}/>
      <div className="content">
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/connecter'><Connecter /></Route>
          <Route  exact path='/subscribe'><Subscribe/></Route>
          <Route  exact path='/addproducts'><AddProduct/></Route>
          <Route path="/products"><Screen category={category}/></Route>
        </Switch>
      </div>
      <FormulaireSubs></FormulaireSubs>
      <GestionCategories></GestionCategories>
      <ProductsDetails></ProductsDetails>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
