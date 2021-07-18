import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function NosValeurs() {
    return (
        <Container>
           <IconsContainer>
            <Contact><FacebookIcon fontSize='large'></FacebookIcon></Contact> 
            <Contact><InstagramIcon fontSize='large'></InstagramIcon></Contact>
            <Contact><TwitterIcon fontSize='large'></TwitterIcon></Contact>
            <Contact><PinterestIcon fontSize='large'></PinterestIcon></Contact>
            <Contact><LinkedInIcon fontSize='large'></LinkedInIcon></Contact>
           </IconsContainer>
        </Container>
    )
}
export default NosValeurs

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  background-color:#545454 ;
  height: 300px;
  
  

 
`;
export const IconsContainer = styled.div`
display: flex;
height: 60px;
margin-top: 20px;
margin-left: 600px;
justify-content: space-between 10px;


`;
export const Contact= styled.div`

margin-right: 20px;

`;
export const hh= styled.div`

margin-top: 20px;
margin-left: 600px;



`;


