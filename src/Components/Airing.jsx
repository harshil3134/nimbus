import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/global'
import Item from './Item'

function Airing({rendered}) {
const {airingAnime,isSearch,searchResults}=useGlobalContext()

const conditionalRender=()=>{

    if(!isSearch && rendered=='airing')
    {
        return <Item data={airingAnime}/>
    }
}

  return (
    <div>
        
        {airingAnime?conditionalRender():"Loading"}
    </div>
  )
}

export default Airing