import React, { useState } from "react";
import {Redirects} from "./Redirects";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Card({description1,prixminimumvente1,dateheureenchere1,durreenchere1,statuts1,idenchere1,idutilisateur1}){
    function voir(id){
          //console.log(id);
    }
    function reencherir(id){
         //console.log(id);
    }
    return(         
      <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary">
          <h4 className="my-0 fw-normal">{description1}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">{prixminimumvente1} <small className="text-muted fw-light">ar</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>date debut:{dateheureenchere1}</li>
            <li>durree:{durreenchere1}</li>
            <li>statut:{statuts1}</li>
          </ul>
          <button type="button" className="w-100 btn btn-lg btn-primary " onClick={voir({idenchere1,idutilisateur1})} >voir fiche</button>
          <button type="button" className="w-100 btn btn-lg btn-primary" style={{marginTop:'10px'}} onClick={reencherir({idenchere1,idutilisateur1})}>reencherir</button>
        </div>
        </div>
      </div>
    )
} 

export function Link({lien}){
    const location = useLocation();
    const[redirect,setRedirect]=useState(false);
    useEffect(() => {
        if (redirect) {
          setRedirect(false);
          window.location.href =lien;
        }
      }, [redirect, location]);       
    return {redirect,location};
}