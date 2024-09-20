import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../css/animeitem.css";
import Description_2 from './Description_2';
import Character from './Character';

function AnimeItem() {

  const {id}=useParams();

  const [anime,setAnime]=useState({});
  const [character,setCharacter]=useState([]);
  
  const {
    title_english, synopsis, 
    trailer,duration,aired, 
    season, images, rank, 
    score,scored_by, popularity, 
    status, rating, source } = anime

const getAnime=async(anime)=>{
const response=await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
const data=await response.json();
setAnime(data.data);
// console.log('Anime'+JSON.stringify(data, null, 2));
// console.log('Anime data'+JSON.stringify(data.data, null, 2));
  }

  const getCharacters=async(anime)=>{
  const response=await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`);
  const data=await response.json();
  setCharacter(data.data);
  console.log(data.data);
  }


  useEffect(()=>{
    getAnime(id);
    getCharacters(id);
  },[id])
const fun=(url)=>{
 return {
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };

}
  

  function condintionalRender(){
    console.log('Anime'+JSON.stringify(anime, null, 2));
    if(anime)
    {
     const containerStyle=fun(images.jpg.large_image_url);
      return(
        <div className='anime-item-container'>
           <div style={containerStyle} className='start-container' >
          
                 <div className='img-container'>
                  <img src={images.jpg.large_image_url} alt='anime img'></img>
                  <div className='anime-det'>
                    <div className='det1'>
                      <b>{rating[0]=='P'?rating.split(' ')[0]:rating.split('+')[0]+'+'} </b>
                    </div>
                    <div className='det2'>
                      <b>{anime.type} </b>
                    </div>
                    <div className="det3">
                   <span>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg>
                   </span>
                    <b>  {anime.episodes} </b>
                    </div>
                  </div>
                 </div>
                 <div className='desc'>
              
                      <div className="title">
                        <h2 ><span className='glass'> {title_english}</span></h2>
                       </div>
                      <div className="description" >
                        <p>
                        {synopsis}
                          </p>
                      </div>
                 </div>
          </div>
          <div className='scontainer'> 
            
          <div className="trailer">
            <iframe 
            src={trailer?.embed_url}
            allowFullScreen='true' 
            allow="accelerometer; autoplay;muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            
            >

            </iframe>
          </div>

          <div className='maize_container'> 
            <Description_2 className='maize' anime={anime}/>
              </div>
           </div>
           <h4>Characters:</h4>
         <div className='character_container'>
     
       <Character character={character}/>
          </div>
         
      </div>
      );
    }
  }

  return (
    <div>
    
    {anime.images?condintionalRender():"Loading"}
     </div>
   
  )
}

export default AnimeItem