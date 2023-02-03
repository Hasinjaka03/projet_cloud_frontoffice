import React from "react";
import { useState,useEffect } from "react";
import { Redirects } from "./Redirects";
import { useParams } from "react-router-dom";
import { Card, Typography, Avatar } from 'antd';

export function Resultat(){

    let { id } = useParams();
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("https://tranquil-pie-production.up.railway.app/api/historique/ResultatEnchere/"+id)
        .then((response) => response.json())

        .then((data) => setData(data));
    }, [id]);
        return (
          <div className="Listuser">
            <Redirects></Redirects>
            <h1>Resultat de l'enchère : {id}</h1>
            {data.map((item) => (
               <li key={item[0]}>
                 <div className="card">
          <h2>Gagnant {item[2]} {item[3]}</h2>
          <p>Prix gagnant: {item[4]}</p>
          <p>Date heure d'obtention : {item[5]}</p>  
        </div>
               </li>
             ))}      
          </div>
        );
} 