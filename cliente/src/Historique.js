import React from "react";
import { useState,useEffect } from "react";
import { Redirects } from "./Redirects";

export function Historique(){

const [encherisseur, setEncherisseur] = useState([]);
const [vendeur, setVendeur] = useState([]);
const token = localStorage.getItem('token');

useEffect(() => {
  if(token) {
    const headers = new Headers();
    headers.append('token', token);

    fetch(`http://localhost:8080/api/historique/HistoriqueEncherisseur`, {
      method: 'GET',
      headers: headers
    })
    .then(response => response.json())
    .then(data => setEncherisseur(data))
    
     //vendeur
     fetch(`http://localhost:8080/api/historique/HistoriqueVente`, {
        method: 'GET',
        headers: headers
    })
    .then(responseVendeur => responseVendeur.json())
    .then(dataVendeur => setVendeur(dataVendeur))


  } else {
    console.log('Token not found');
  }
}, [token]);

       return (
          <div className="Listuser">
          <Redirects></Redirects>

          <h1>Historique de vos enchères</h1>


   <div className="historique-encherisseur">
   <p>Historique Encherisseur</p>
          {encherisseur.map((enchere) => (
           <li key={enchere[0]}>
           <div className="card">
             <h2>{enchere[0]}</h2>
             <p>Prix minimum de vente: {enchere[1]}</p>
             <p>Durée de l'enchère: {enchere[2]} minutes</p>
             <p>Date et heure de l'enchère: {enchere[3]}</p>
             <p>Montant offre : {enchere[4]}</p>
             <p>Date heure du mise: {enchere[5]}</p>
             <p>produit : {enchere[6]}</p>
             <p>Description du produit : {enchere[7]}</p>
             <p>Catégorie produit: {enchere[8]}</p>
           </div>
         </li> 
    ))}
   </div>  

       
  <div className="historique-vente">
  <p>Historique vente</p>
         {vendeur.map((enchere) => (
           <li key={vendeur[0]}>
           <div className="card">
             <h2>{vendeur[0]}</h2>
             <p>Prix minimum de vente: {vendeur[1]}</p>
             <p>Durée de l'enchère: {vendeur[2]} minutes</p>
             <p>Date et heure de l'enchère: {vendeur[3]}</p>
             <p>produit : {vendeur[4]}</p>
             <p>Description du produit : {vendeur[5]}</p>
             <p>Catégorie produit: {vendeur[6]}</p>
             <p>Prix gagnant : {vendeur[7]}</p>
             <p>Utilisateur : {vendeur[9]}  {vendeur[10]}</p>
           </div>
         </li> 
    ))}
  </div>
        
 </div>

  );
} 