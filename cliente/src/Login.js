import { useState,useEffect } from "react";
import {Field} from "./Field";
import { Redirects } from "./Redirects";
import { useLocation } from "react-router-dom";



export default function Login(){
    const [email,setEmail]=useState('hardi@gmail.com');
    const [password,setPassword]=useState('hardi');
    const [redirect, setRedirect] = useState(false);
    const location = useLocation();
    useEffect(() => {
      if (redirect) {
        setRedirect(false);
        window.location.href = '/redirect';
      }
    }, [redirect, location]);
    
    const loginin = async () => {
     
      const data = new FormData();
      data.append('email',email);
      data.append('mdp', password);
        const response = await fetch('http://localhost:8080/api/utilisateur/login', {
          method: 'POST',
          body: data
         });
        if(response.ok)
        {
         //traitement de la réponse OK
         const data = await response.json();
         console.log(data.datas);
         alert(data.message);
         localStorage.setItem('token',data.datas);
         setRedirect(true);
        }
        else{
         //traitement de la réponse KO
         console.log("failed");
         alert("erreur");
        }
     };
    return(
        <div className="d-flex align-items-center justify-content-center h-100 w-100" style={{marginTop:'100px'}} >
          <div className="card" style={{width:'25rem',boxShadow:'0px 0px 1px 0px 1px'}}>
            <div className="card-body  ">
                  <h1 clasName="text-center">enchere</h1>
                  <Field onChange={(e)=>{setEmail(e.target.value)}} value={email} >email</Field>
                  <Field onChange={(e)=>{setPassword(e.target.value)}} value={password} >password</Field>
                  <button onClick={loginin} className="btn btn-success">login in</button>
            </div>
         </div>
        </div>
        
    );
}