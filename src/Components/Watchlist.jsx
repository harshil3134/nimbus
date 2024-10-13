import React from 'react'
import "../css/watchlist.css"

function Watchlist({rendered}) {

    const conditionalRender=()=>{
        if(rendered === 'watchlist'){
            return <div>
hey
            </div>
        }
    }
  return (
    <div className='watchlist-main'>
        <h2>Watchlist </h2>
             {conditionalRender()}
    </div>
  )
}

export default Watchlist