import React from "react";
import { useState,useEffect } from "react";
import { Redirects } from "./Redirects";


export function ListEnchere(){
      
    //   const {data}=CallWebService("http://localhost:8080/api/enchere/listeEnchere");
       //console.log(data);
       const [data, setData] = useState([]);
       const [redirect, setRedirect] = useState(false);
       const [redirect2, setRedirect2] = useState(false);
       const [idEnchere, setIdEnchere] = useState(null);    
     

       const [minutes, setMinutes] = useState(5);
       const [seconds, setSeconds] = useState(0);
     
       useEffect(() => {
         fetch("https://tranquil-pie-production.up.railway.app/api/enchere/listeEnchere")
           .then((response) => response.json())
           .then((data) => {
            const encheres = data.map((enchere) => {
              let dateFin = new Date();
              dateFin.setDate(dateFin.getDate() + enchere.durreEnchere);
              enchere.dateFin = dateFin;
              return enchere;
            });
            setData(encheres);
          });
       }, []);

       function voirFiche(id) {
        setIdEnchere(id);
        setRedirect(true);
      }
    
      function Encherir(id) {
        setIdEnchere(id);
        setRedirect2(true);
      }
    
      if (redirect) {
        window.location.href = `/ficheEnchere/${idEnchere}`;
        return null;
      }
    
      if(redirect2) { 
        const token = localStorage.getItem('token');
        if (!token) {
          alert("Vous devez être connecté pour accéder à cette page");
          window.location.href = '/listEnchere';
        } else {
          window.location.href = `/Encherir/${idEnchere}`;
        }
        return null;
      }
         
        return (
          <div className="Listuser">
          <Redirects></Redirects>
          <h1>Liste des enchères</h1>

          {data.map((enchere) => (
     
     <li key={enchere.idenchere}>
        <div className="card">
          <h2>{enchere.description}</h2>
          <p>Prix minimum de vente: {enchere.prixMinimumVente}</p>
          <p>Durée de l'enchère: {enchere.durreEnchere} mn</p>
          <p>Date et heure de l'enchère: {enchere.dateheureenchere}</p>
        
          <p>Status: {enchere.status === 1 ? "Terminé" : "En cours"}</p>
          <button onClick={() => voirFiche(enchere.idenchere)}>
            Voir ficheEnchere
          </button>
          {enchere.status !== 1 && (
        <button onClick={() => Encherir(enchere.idenchere)}>
          ReEncherir
        </button>
          )}
        </div>
      </li>
      
    ))}
        </div>
        );
} 