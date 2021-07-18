
import React, { Component, useState } from 'react';
import styled from 'styled-components'

function GestionCategories() {

    const [NameCategorie, setNameCategorie] = useState("");
    const [category_id, setCategorie] = useState("");
    const [categories, setCategorieList] = useState([]);
    
    
    return (
      <div>
  
        <Container>
        <Add>
        <input onChange={e => setNameCategorie(e.target.value)} type='text' placeholder="enter your new categorie" value={NameCategorie}></input>
        <AddBtn></AddBtn>
       </Add>
       <Delete>
        <select value={category_id} onChange={(e)=>setCategorie(e.target.value)}>
            {categories.map(el=><option value={el.id}>{el.nom}</option>)}
            
        </select>
        <DeleteBtn></DeleteBtn>
          </Delete>
        </Container>
      </div>
  
    )
  }
  export default GestionCategories
  export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  `;
   export const Add = styled.div`
  
   `;
   export const Delete = styled.div`
  
   `;
  export const Input = styled.input`
  
  `;
  export const AddBtn = styled.button`
  
  `;
  export const DeleteBtn = styled.button`
  
  `;