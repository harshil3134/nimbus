import React from 'react'
import { Link } from 'react-router-dom';
import "../css/item.css";

function Item({data}) {
    console.log(data);
  return (
    <div className='anime-outer-container'>
   
  {data.map((anime)=>{
    const duration=anime.duration;
    const dur=duration.split(" ");
    const dur1=dur[0];
    return <Link className='anime-container' to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
    <img src={anime.images.jpg.large_image_url} alt='anime img'></img>
    <div className="anime-detail">
      <h3>{anime.title_english}</h3>
      <div className='anime-add-detail'>
        <h5>{anime.type}</h5>
        <h5>{dur1=="Unknown"?" ":dur1}</h5>
        <h5 className='full_name'>{anime.title_english}</h5>
      </div>
    </div>
    </Link>
  })}
            
    </div>
  ) 
}

export default Item