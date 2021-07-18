
import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryService from './../services/category';

function GestionCategories() {

  const [NameCategorie, setNameCategorie] = useState("");
  const [category_id, setCategorie] = useState("");
  const [categories, setCategorieList] = useState([]);

  const getAllCategories = () => CategoryService.getAll().then(res => {
    setCategorieList(res.data);
  })
  useEffect(() => {
    getAllCategories()
  }, [])

  const handleOnAdd = () => {
    CategoryService.create({ nom: NameCategorie }).then(res => {
      setNameCategorie("")
      getAllCategories()
    }).catch(err => { if(err.response.data.errors) { alert('Ce nom existe Déja!') } })
  }

  const handleOnDelete = () => {
    CategoryService.remove(category_id).then(res => {
      getAllCategories()
    })
  }

  return (
    <div>

      <Container>
        <Add>
          <input onChange={e => setNameCategorie(e.target.value)} type='text' placeholder="enter your new categorie" value={NameCategorie}></input>
          <AddBtn onClick={handleOnAdd}>Ajouter</AddBtn>
        </Add>
        <Delete>
          <select value={category_id} onChange={(e) => setCategorie(e.target.value)}>
            {categories.map(el => <option value={el.id}>{el.nom}</option>)}
          </select>
          <DeleteBtn onClick={handleOnDelete}>Supp</DeleteBtn>
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