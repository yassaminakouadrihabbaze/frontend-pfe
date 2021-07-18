import React, {useState}  from 'react';
import styled from 'styled-components'
import Header from './Header';




function FormulaireSubs() {
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState('');
  const [firstName, setFirstName]= useState("");
  const [secondName, setSecondName] = useState('');
  const [civilisation, setCivilisation]= useState("");
  const [confirPass, setConfirPass] = useState('');
    
    
    return (
      <div>
          
          <Container>
              <FirstRow>
                  <CivilisationInput onChange={e=>setEmail(e.target.value)} type='text' placeholder="civilisation" value="civilisation"></CivilisationInput>
                  <FirstNameInput onChange={e=>setEmail(e.target.value)} type='text' placeholder="First Name" value="firstName"></FirstNameInput>
                  <SecondNameInput onChange={e=>setEmail(e.target.value)} type='text' placeholder="Second Name" value="SecondName"></SecondNameInput>
              </FirstRow>
              <SecondRow>
                  <MailInput onChange={e=>setEmail(e.target.value)} type='text' placeholder="E-mail" value={email}></MailInput>
              </SecondRow>
              <ThirdRow>
                  <KeyInput  onChange={e=>setEmail(e.target.value)} type='text' placeholder="Mot de passe" value="password"></KeyInput>
                  <KeyConfInput  onChange={e=>setEmail(e.target.value)} type='text' placeholder="Confirmer le mot de passe" value="confirPass"></KeyConfInput>
              </ThirdRow>

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

export const FirstRow   = styled.div`
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

