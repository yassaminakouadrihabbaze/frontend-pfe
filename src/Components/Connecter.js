import { SentimentSatisfied } from '@material-ui/icons';
import React , {useState}from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Header from './Header'



function Connecter() {

  const [email, setEmail]= useState("");
  const [password, setPassword] = useState('');
    
  const signIn = e =>{
    e.preventDefault()
    //some fancy firebase register shiiiit....
  }

 

    return (
        <div>
        
        <Container>
         
         <LoginContainer>
             <ConnectewVous><h3>Connectez vous</h3></ConnectewVous>
           <EmailInput onChange={e=>setEmail(e.target.value)} type='text' placeholder="E-mail" value={email}>
           </EmailInput>
           <KeyWordInput  onChange={e=>setPassword(e.target.value)} type='text' placeholder="password" value={password} >
           </KeyWordInput >
           <ForgetKey>
               <Text ><a>Mot de passe oublier ?</a></Text>
               <OKBtn onClick={signIn}>OK</OKBtn>
           </ForgetKey>
         </LoginContainer>
         <Ou><Text>OU</Text></Ou>
         <SigninContainer>
             <Text2><h3>Inscrivez vous</h3></Text2>
             <Link to="/subscibe">
             <SinginBtn >CREER UN COMPTE</SinginBtn>
             </Link>

         </SigninContainer>
        </Container>
        </div>
        
    )
}
export default Connecter
export const Container = styled.div`
display: flex;
//flex-direction: column;
background-color: white;
`;
export const LoginContainer = styled.div`
flex-direction: column;
display: flex;
background:#D3D3D3 ;
//height: 300px;
width: 500px;
margin-left: 100px;
margin-top: 100px;
padding: 20px;
margin-bottom: 100px;

`;
export const ConnectewVous = styled.div`
margin-top: 20px;


`;
export const EmailInput = styled.input`
margin-top: 20px;
height: 40px;
border-radius: 8px;
  border: 2px solid #e31837;

`;
export const KeyWordInput = styled.input`
margin-top: 20px;
height: 40px;
border-radius: 8px;
  border: 2px solid #e31837;


`;
export const ForgetKey = styled.div`
display: flex;
margin-top: 30px;

`;
export const Text = styled.div`
width: 200 px;
margin-left:20px ;
margin-right: 50px;


`;
export const OKBtn = styled.button`
margin-right: 30px;
margin-left: 100px;
height: 30px;
width: 30px;
background-color: #d62525;
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
export const SigninContainer = styled.div`
flex-direction: column;

flex-direction: column;
display: flex;
background:white;
//height: 300px;
width: 500px;
margin-left: 100px;
margin-top: 100px;
//padding: px;
margin-bottom: 100px;
justify-content: center;





`;


export const SinginBtn = styled.button`
margin-right: 30px;
margin-left: 30px;
height: 50px;
width: 200px;
background-color: #d62525;
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
export const Ou = styled.div`
margin-right:100 ;
margin-left:100px ;
margin-top: 225pX;



`;

export const Text2 = styled.div`
margin-bottom: 20px;
margin-left: 65px ;
//margin-top: 50pX;



`;


