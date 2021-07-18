import React from 'react';
import styled from 'styled-components';
import { HeaderContainer, HeaderLogo,HeaderSearch, HeaderSearchInput,HeaderSearchIconContainer ,HeaderItems, BuyDropMenu, SellDropMenu,HeaderConect, Seconnecter } from './HeaderElements';
import img1 from './../../image/Logo1.png';
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';




function Header() {
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
