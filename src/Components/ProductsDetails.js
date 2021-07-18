import React, { Component } from 'react';
import styled from 'styled-components';
import GavelIcon from '@material-ui/icons/Gavel';

function Connecter() {

      return (
          <div>
          
          <Container>
           <ImgContainer>
           <img  ></img>
            </ImgContainer>
          </Container>
          <DetailsSection>
              <ul>
                  <li>
                    <h4>Name:</h4>
                  </li>
                  <li>
                  <h4>Mark:</h4>
                  </li>
                  <li>
                  <h4>Description:</h4>
                  </li>
                  <li>
                  <h4>Initial Price:</h4>
                  </li>
                  <li>
                  <h4>current Price:</h4>
                  </li>
              </ul>
              <DetailsFooter>
                  <ImgsPagination></ImgsPagination>
                   <Biding>
                       <bidingInput></bidingInput>
                        <GavelIcon></GavelIcon>
                   </Biding>
              </DetailsFooter>
          </DetailsSection>
          </div>
          
      )
  }
  export default Connecter
  export const Container = styled.div`
  display: flex;
  //flex-direction: column;
  background-color: #D3D3D3;
  `;
 export const ImgContainer = styled.div`
 
 `;
 export const DetailsSection = styled.div`

 `;
 export const DetailsFooter = styled.div`

 `;
 export const ImgsPagination = styled.div`

 `;
 export const Biding = styled.div`

 `;
 export const bidingInput = styled.input`

 `;
 export const DetailsFooter = styled.div`

 `;
 