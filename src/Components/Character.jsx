import React from 'react'
import "../css/character.css";

function Character({character}) {
  return (
    <div className='main'>
        {
            character.map((item,index)=>{
                const {role} = item
                const {images, name, mal_id} = item.character
                return(
                    <div className='character-block' key={index}>
                        <img src={images.jpg.image_url} alt=""/>
                        <h3>{name}</h3>
                        <p>{role}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Character