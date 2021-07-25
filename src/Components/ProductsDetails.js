import React, { Component } from 'react';
import styled from 'styled-components';
import GavelIcon from '@material-ui/icons/Gavel';

function ProductsDetails
() {

      return (
          <div>
          
          <Container>
           <ImgContainer>
           
            </ImgContainer>
         
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
                       
                       <Input  type='text' placeholder="bid for the product" ></Input>
                       <button><GavelIcon></GavelIcon></button>
                   </Biding>
              </DetailsFooter>
          </DetailsSection>
          </Container>
          </div>
          
      )
  }
  export default ProductsDetails

  export const Container = styled.div`
  display: flex;
  //flex-direction: column;
  //background-color: gray;
  
  
  margin-left: 100px;
  margin-right: 100px;
  margin-top:100px ;
  margin: 100px;

  `;
 export const ImgContainer = styled.div`
 height: 300px;
  min-width: 300px;
  max-width: 100%;
  margin: 50px;
  
;
  box-shadow: 8px 8px #d62525;
 
 `;
 export const DetailsSection = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;

 `;
 
 export const ImgsPagination = styled.div`


 `;
 export const Biding = styled.div`
 align-items: center;
  
 `;
 export const Input = styled.input`
 //height: 100px;
 //width: 100px;
 height: 24px ;

 `;
 export const DetailsFooter = styled.div`
 height: 10px;
 display: flex;


 `;
 