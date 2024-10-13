import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../css/item.css";

function Item({data}) {
    const [watchlist,setWatchlist]=React.useState([]);
function addWatchlist(id){
      console.log("hey");
    if(watchlist.includes(id)){
        setWatchlist(watchlist=>{
          const updated=watchlist.filter(ele=>ele!==id);
          return updated;
        });
   
    }
    else{
      setWatchlist(watchlist=>[...watchlist,id]);
    }
    console.log(watchlist);
    }

    useEffect(()=>{
      console.log("watchlist"+watchlist);
    },[watchlist])

  return (
    <div className='anime-outer-container'>
   
  {data.map((anime)=>{
    const duration=anime.duration;
    const dur=duration.split(" ");
    const dur1=dur[0];
    return <Link className='anime-container' to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
      {/* <div className='img-container'> */}
      <img src={anime.images.jpg.large_image_url} alt='anime img'></img>

    
    <div className="anime-detail">
      <h3>{anime.title_english}</h3>
      <div className='anime-add-detail'>
        <h5>{anime.type}</h5>
        <h5>{dur1=="Unknown"?" ":dur1}</h5>
        <h5 className='full_name'>{anime.title_english}</h5>
        <div className="add-watchlist" onClick={(e)=>{ e.stopPropagation(); e.preventDefault();}}>
          <svg onClick={(e)=>{e.stopPropagation(); e.preventDefault();addWatchlist(anime.mal_id);}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
          
       </div>
      </div>
    </div>
    </Link>
  })}
            
    </div>
  ) 
}

export default Item