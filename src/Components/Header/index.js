


import img1 from './../../image/Logo1.png';
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryService from '../../services/category';
import Screen from '../screen';



function Header(props) {
    const [selectedCategory_id, setselectedCategorie] = useState("");
    const [categories, setCategorieList] = useState([]);
    
  const getAllCategories = () => CategoryService.getAll().then(res => {
    setCategorieList(res.data);
    setselectedCategorie(res.data[0]?.id || 0)
  })
  const handleSelectCategory =  (e)=>{
      props.setCategory(e.target.value)
      setselectedCategorie(e.target.value)
  }
  useEffect(() => {
    getAllCategories()
  }, [])
    return (
        <div>
            <HeaderContainer >
              <HeaderLogo>
                  <Link to="/">
                  <img src= {img1}/>
                  </Link>
              </HeaderLogo>
            <HeaderSearch>
                <HeaderSearchInput type='text'/>
                <HeaderSearchIconContainer>
                    
                    <SearchIcon></SearchIcon>
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderItems>
                <BuyDropMenu>
                <select  value={selectedCategory_id} onChange={(e) => handleSelectCategory(e)}>
            {categories.map(el => <option value={el.id}>{el.nom}</option>)}
          </select>
                </BuyDropMenu>
                <SellDropMenu>

                </SellDropMenu>
                <HeaderConect>
                    
                    <AccountCircleIcon fontSize='large'></AccountCircleIcon>
                    <Link to="/connecter">
                    <Seconnecter>Seconnecter</Seconnecter>
                    </Link>
                </HeaderConect>
            </HeaderItems>
            
             
              

            </HeaderContainer >
            
        </div>
    )
}

export default Header
export const HeaderContainer = styled.div`
  height: 60px;
  background-color: #545454;
  display: flex;
  align-items: center;
 
 
 `;
 export const HeaderLogo = styled.div`
 img{
     height: 60px;
    width: 200px;
    margin-left: 11px;
 }

 
 
 `;
 export const HeaderSelleroptions = styled.div`
 margin-left: 30px;
 height: 200px;
 
 
 
 
 `;
 export const HeaderBayerOptions = styled.div`
 
 
 
 
 `;
 export const HeaderSubscribe = styled.div`
 
 
 
 
 `;
 export const HeaderSearch = styled.div`
 display: flex;
 margin-right: 100px;
 margin-left: 50px;
// flex: 1;
 color: white;

//align-items: center;

  

 
 
 
 
 `;
  export const HeaderSearchInput = styled.input`
  width: 300px;
  height: 24px ;
  
  


 
 
 
 
  `;
   export const HeaderSearchIconContainer = styled.div`
   
     padding: 5px;
     height: 20px ;
     background-color: #d62525;
 
 
 
   `;
    export const HeaderItems = styled.div`
   
     display: flex;
  
 
 
    `;
     export const BuyDropMenu = styled.div`
   
      color: white;
      background-color: gray;
      width: 50px;

 
 
 
     `;
      export const SellDropMenu = styled.div`
   
 
 
 
 
      `;
       export const HeaderConect = styled.div`
   
       display: flex;
       //margin-left:400px ;
       color: white;
       align-items: center;
       font-size: 20px;
       
 
 
 
       `;
        export const Seconnecter = styled.p`
   
       color: white;
       margin-left: 10px;
       
 
 
 
        `;
