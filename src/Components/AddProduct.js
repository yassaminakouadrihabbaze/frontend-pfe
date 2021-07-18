import React, { Component, useEffect } from 'react';
import CategoryService from './../services/category';

function Connecter() {

    const [Name, setName] = useState("");
    const [categories, setCategorieList] = useState([]);
    const [category_id, setCategorie] = useState('');
    const [Prix, setPrix] = useState("");
    const [Quantite, setQuantite] = useState('');
    const [Description, setDescription] = useState("");
    

    useEffect(() => {
        CategoryService.getAll().then(res=>{
            setCategorieList(res.data);
        })
    }, [])
    
    return (
      <div>
  
        <Container>
        <input onChange={e => setName(e.target.value)} type='text' placeholder="" value={Name}></input>
        <input onChange={e => setUsername(e.target.value)} type='text' placeholder="" value={}></input>
        <input onChange={e => setPrix(e.target.value)} type='text' placeholder="" value={Prix}></input>
        <input onChange={e => setQuantite(e.target.value)} type='text' placeholder="" value={Quantite}></input>
        <input onChange={e =>  setDescription(e.target.value)} type='text' placeholder="" value={Description}></input>
        <select value={category_id} onChange={(e)=>setCategorie(e.target.value)}>
            {categories.map(el=><option value={el.id}>{el.nom}</option>)}
            
        </select>
          
        </Container>
      </div>
  
    )
  }
  export default Connecter
  export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  `;
  export const Input = styled.input`
  
  `;
  export const AddBtn = styled.button`
  
  `;
 