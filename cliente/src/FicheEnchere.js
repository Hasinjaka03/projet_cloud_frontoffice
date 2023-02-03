import React from "react";
import { useState,useEffect } from "react";
import { Redirects } from "./Redirects";
import { useParams } from "react-router-dom";
import { Card, Typography, Avatar } from 'antd';

export function FicheEnchere(){
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [redirect2, setRedirect2] = useState(false);
    const [idEnchere, setIdEnchere] = useState(null);    
  
    useEffect(() => {
      fetch("http://localhost:8080/api/enchere/ficheEnchere/"+id)
        .then((response) => response.json())

        .then((data) => setData(data));
    }, [id]);

    
    function Encherir(id) {
      setIdEnchere(id);
      setRedirect2(true);
    }

    function Resultat(id)
    {
      setIdEnchere(id);
      setRedirect(true);
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


    if(redirect)
    {
      const token = localStorage.getItem('token');
      if (!token) {
        alert("Vous devez être connecté pour accéder à cette page");
        window.location.href = '/listEnchere';
      } else {
        window.location.href = `/Resultat/${idEnchere}`;
      }
      return null;
    }

        return (
          <div className="Listuser">
            <Redirects></Redirects>
            <h1>Fiche de l'enchère : {id}</h1>
            {data.map((item) => (
       <Card key={item[0]} style={{ width: 300, margin: '16px auto' }} cover={<img alt={item[10]} src={item[10]} />}>
    <Card.Meta
      avatar={<Avatar src={item[10]} />}
      title={<Typography.Title level={4}>{item[4]}</Typography.Title>}
      description={
        <div>
          <p>vendeur: {item[2]} {item[3]}</p>
          <p>Prix minimum Vente: {item[5]}</p>
          <p>Durree : {item[6]} mn</p>
          <p>date heure enchère: {item[7]}</p>
          <p>date heure fin: {item[8]}</p>
          <p>produit : {item[9]}</p>
          <p>catégorie : {item[11]}</p>
          <p>Status: {item[12] === 1 ? "Terminé" : "En cours"}</p>
          
          {item[12] !== 1 && (
        <button onClick={() => Encherir(item[0])}>
          ReEncherir
        </button>
         )}

        {item[12] !== 1 && (
        <button onClick={() => Resultat(item[0])}>
          Voir le resultat
        </button>
         )}

        </div>
      }
    />
</Card>
    ))}      
          </div>
        );
} 