import React from 'react'
import styled from 'styled-components'
import img2 from 'C:/Users/Lenovo/pfee/src/image/Capture1.PNG';
import img3 from 'C:/Users/Lenovo/pfee/src/image/Capture2.PNG';
import img4 from 'C:/Users/Lenovo/pfee/src/image/Capture3.PNG';

function Categories() {
    return (
        <Container>
            <TypeContainer>
                <TypeImg src= {img2}>
                </TypeImg>
                <TypeBtn>Meubles et Objets d'art </TypeBtn>
            </TypeContainer>
            <TypeContainer>
                <TypeImg src= {img3}>
                </TypeImg >
                <TypeBtn>Vihécules </TypeBtn>
            </TypeContainer>
            <TypeContainer>
                <TypeImg src= {img4}>
                </TypeImg>
                <TypeBtn>Matériel profitionelle </TypeBtn>
            </TypeContainer>
        </Container>
    )
}

export default Categories

export const Container = styled.div`
 display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
 
`;
export const TypeContainer = styled.div`
margin: 0 2rem;
  line-height: 2;
  width: 300px;
  justify-content: center;
  display: flex;
  flex-direction: column;

`;
export const TypeImg = styled.img`
height: 200px;
  min-width: 300px;
  max-width: 100%;
  

`;
export const TypeBtn = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: white;
  color: #e31837;
  border-radius: 8px;
  border: 2px solid #e31837;
  transition: 0.2 ease-out;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }

`;