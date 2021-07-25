import React, { Component, useEffect,useState } from 'react';
import CategoryService from './../services/category';
import ProductService from './../services/products';
import styled from'styled-components'

function AddProduct() {

    const [Name, setName] = useState("");
    const [categories, setCategorieList] = useState([]);
    const [category_id, setCategorie] = useState('');
    const [Prix, setPrix] = useState("");
    const [Quantite, setQuantite] = useState('');
    const [Description, setDescription] = useState("");
    
    const handleOnAdd = () => {
      ProductService.create({
        nom: Name, dsecription: Description, prix: Prix, qte: Quantite, category_id
      }).then(res=>{
        setName("");
        setDescription("")
      }).catch(err=>{
        //alert("une erreur c'est produite")
        const error = err.response.data.errors;
        error.map(el=>{
          if(el.field ===	"nom" && el.error	=== "not_unique")
          alert('Ce Nom est Déja prise');
        })
      });
    }

    useEffect(() => {
        CategoryService.getAll().then(res=>{
            setCategorieList(res.data);
        })
    }, [])
    
    return (
      <div>
  
        <Container>
        <input onChange={e => setName(e.target.value)} type='text' placeholder="name" value={Name}></input>
        
        <input required onChange={e => setPrix(e.target.value)} type='text' placeholder="price initial" value={Prix}></input>
        <input required onChange={e => setQuantite(e.target.value)} type='text' placeholder="Quantite" value={Quantite}></input>
        <input required onChange={e =>  setDescription(e.target.value)} type='text' placeholder="Description" value={Description}></input>
        <select required value={category_id} onChange={(e)=>setCategorie(e.target.value)}>
        {categories.map(el=><option value={el.id}>{el.nom}</option>)}
            
        </select>
        <button onClick={handleOnAdd}>Add</button>
          
        </Container>
      </div>
  
    )
  }
  export default AddProduct
  export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  `;
  export const Input = styled.input`
  
  `;
  export const AddBtn = styled.button`
  
  `;
 