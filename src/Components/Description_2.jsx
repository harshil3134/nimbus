import React from 'react'
import "../css/description_2.css";

function Description_2({anime}) {
    console.log('Anime'+JSON.stringify(anime, null, 2));
  return (
   <div className='more_info'>
    <h4>More Info:</h4>
    <div>
       <p> <span className='more_info_title'>Japanese title:</span><span>{anime.title_japanese}</span> </p>
       <p><span className='more_info_title'>Aired:</span><span>{anime.aired.string}</span></p>
       <p> <span className='more_info_title'>Synonyms:</span><span>{anime.title_synonyms[0]}</span>   </p>
        <p><span className='more_info_title'>Status: </span><span>{anime.status}</span>  </p>
        <p><span className='more_info_title'>Duration:</span><span>{anime.duration}</span></p>
        <p><span className='more_info_title'>Score:</span><span>{anime.score}</span></p>
    </div>

    <div>
            <span style={{paddingRight:'10px',}}>Genres:</span>
               {anime.genres.map((item,index)=>{
            return <span key={index} className='genre'>{item.name}</span>
             })}
    </div>
<div style={{paddingBottom:'10px'}}>
    <span style={{paddingRight:'10px'}}>Studios:</span>
    {anime.studios.map((item,index)=>{
            return <span key={index}>{item.name}</span>
             })}
</div>
    <div>
        <span style={{paddingRight:'10px',}}>Producers:</span>
                {anime.producers.map((item,index)=>{
                    if(index!=anime.producers.length-1)
                    {
                        return <span key={index}>{item.name}, </span>
                    }
                    else{
                        return <span key={index}>{item.name}</span>
                    }
            
             })}

             {anime.licensors.map((item,index)=>{
                    if(index!=anime.licensors.length-1)
                    {
                        return <span key={index}>{item.name}, </span>
                    }
                    else{
                        return <span key={index}>{item.name}</span>
                    }
             })

             }


    </div>
   </div>
  )
}

export default Description_2