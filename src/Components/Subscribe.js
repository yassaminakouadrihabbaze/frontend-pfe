import React, { useState } from 'react';
import styled from 'styled-components'
import Header from './Header';
import UserService from '../services/users';


function FormulaireSubs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState('');
  const [adress, setAdress] = useState("");
  const [ddn, setDdn] = useState(new Date());
  const [confirPass, setConfirPass] = useState('');
  const [num_tel, setNumTel] = useState("");


  const handleRegister = () => {
    if (password !== confirPass) {
      alert('Le mot de pass ne sont pas similaire')
    } else {
      const data = {
        nom: firstName,
        prenom: secondName,
        type: "client",
        password, username,
        adress, num_tel, email, ddn, email
      }

      UserService.register(data)
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        const data = err.response.data;
        if (data.errors){
          data.errors.map(e=>{
            if (e.field === 'users.email' && e.error === "not_unique")
              alert('email est déja utiliser')
              else if (e.field === 'users.username' && e.error === "not_unique")
              alert('username est déja utiliser')
          })
        }
        console.log();
      });
    }
  }


  return (
    <div>

      <Container>
        <FirstRow>
          <CivilisationInput onChange={e => setAdress(e.target.value)} type='text' placeholder="Adress" value={adress}></CivilisationInput>
          <FirstNameInput onChange={e => setFirstName(e.target.value)} type='text' placeholder="First Name" value={firstName}></FirstNameInput>
          <SecondNameInput onChange={e => setSecondName(e.target.value)} type='text' placeholder="Second Name" value={secondName}></SecondNameInput>
        </FirstRow>
        <SecondRow>
          <MailInput onChange={e => setEmail(e.target.value)} type='text' placeholder="E-mail" value={email}></MailInput>
          <MailInput onChange={e => setNumTel(e.target.value)} type='text' placeholder="Num Tel" value={num_tel}></MailInput>
        </SecondRow>
        <ThirdRow>
        <KeyInput onChange={e => setUsername(e.target.value)} type='text' placeholder="Username" value={username}></KeyInput>
          <KeyInput onChange={e => setPassword(e.target.value)} type='text' placeholder="Mot de passe" value={password}></KeyInput>
          <KeyConfInput onChange={e => setConfirPass(e.target.value)} type='text' placeholder="Confirmer le mot de passe" value={confirPass}></KeyConfInput>
        </ThirdRow>
        <label for="start">Date de naissance</label>
        <input type="date" id="start" name="trip-start"
          value={ddn} onChange={(e) => setDdn(e.target.value)}
          min="1950-01-01" max="2002-01-01"></input>
        <button onClick={handleRegister}>Register</button>
      </Container>
    </div>
  )
}
export default FormulaireSubs
export const Container = styled.div`
display: flex;
flex-direction: column;
//height: 100px;
//width: 100px;
background:#D3D3D3 ;
margin: 100px;



`;

export const FirstRow = styled.div`
display: flex;


margin-top: 50px;
margin-bottom: 20px;




`;
export const SecondRow = styled.div`

display: flex;

`;
export const ThirdRow = styled.div`
display: flex;

`;
export const CivilisationInput = styled.input`
margin-top: 20px;
margin-left: 30px;
height: 40px;
border-radius: 8px;
  border: 2px solid #e31837;

`;
export const FirstNameInput = styled.input`

margin-top: 20px;
height: 40px;
border-radius: 8px;
  border: 2px solid #e31837;

`;
export const SecondNameInput = styled.input`
margin-top: 20px;
height: 40px;
border-radius: 8px;
  border: 2px solid #e31837;
`;

export const KeyInput = styled.input`
margin-top: 20px;
height: 40px;
border-radius: 8px;
  border: 2px solid #e31837;
`;
export const KeyConfInput = styled.input`
margin-top: 20px;
height: 40px;
border-radius: 8px;
  border: 2px solid #e31837;
`;
export const MailInput = styled.input`
margin-top: 20px;
height: 40px;
border-radius: 8px;
  border: 2px solid #e31837;
`;



export const RadioBtns = styled.div`


`;
export const registringBtn = styled.button`

`;

