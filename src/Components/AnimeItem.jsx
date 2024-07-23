import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AnimeItem() {

  const {id}=useParams();

  const [anime,setAnime]=useState({});
  const [character,setCharacter]=useState([]);
  
  const {
    title, synopsis, 
    trailer,duration,aired, 
    season, images, rank, 
    score,scored_by, popularity, 
    status, rating, source } = anime

const getAnime=async(anime)=>{
const response=await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
const data=await response.json();
setAnime(data.data);
// console.log('Anime'+JSON.stringify(data, null, 2));
console.log('Anime'+data.data);
  }

  useEffect(()=>{
    getAnime(id);
  },[])

  return (
    <div>AnimeItem:{title}
    

     </div>
   
  )
}

export default AnimeItem