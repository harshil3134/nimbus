import React from 'react'
import Item from './Item'
import { useGlobalContext } from '../context/global'

function Upcoming({rendered}) {

  const {upcomingAnime,isSearch,searchResults}=useGlobalContext()

  const conditionalRender=()=>{
  if(!isSearch && rendered=='upcoming')
  {
      return <Item data={upcomingAnime}/>
  }
}
  return (
   <>
   {upcomingAnime?conditionalRender():"Loading..."}
   </>
  )
}

export default Upcoming