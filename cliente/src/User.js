import React, { useState } from "react"
import {  ListEnchere } from "./ListEnchere"
import uniquid from 'uniqid'
import axios from 'axios'
import {useFetch } from "./CallWebService";
import { Field } from "./Field";
export default function User(){

    const [nombre,setnombre]=useState('')
    const[email,setemail]=useState('')
    const[telephone,settelephone]=useState('')
    const[mdp,setMdp]=useState('')
    function userclick(){
        var identity={
            nombre:nombre,
            email:email,
            telephone:telephone,
            mdp:mdp
        }
        console.log(identity);
        
    }
    return(
        <div className="container">
            <div className="row">
               <div className="col-sm-6 offset-3">
                 <h2>creer un nouveau utilisateurs</h2>
                 <Field onChange={(e)=>{setMdp(e.target.value)}} value={mdp} >mot de passe</Field> 
                <div className="mb-3">
                   <label htmlFor="nombre" className="form-label">Nombre</label>
                   <input type="text" className="form-control" onChange={(e)=>{setnombre(e.target.value)}} value={nombre}></input>
                </div>
                <div className="mb-3">
                   <label htmlFor="email" className="form-label">Email</label>
                   <input type="email" className="form-control" onChange={(e)=>{setemail(e.target.value)}} value={email}></input>
                </div>
                <div className="mb-3">
                   <label htmlFor="telephone" className="form-label">Telephone</label>
                   <input type="telephone" className="form-control" onChange={(e)=>{settelephone(e.target.value)}} value={telephone}></input>
                </div> 
                <button onClick={userclick} className="btn btn-success">creer</button>
               </div>
            </div>
        </div>
    )
} 
