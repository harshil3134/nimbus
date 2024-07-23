import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/global'
import Item from './Item';



function Popular({rendered}) {
    const {popularAnime,isSearch, searchResults} = useGlobalContext()
    console.log(popularAnime);
    const conditionalRender = () => {
        if(!isSearch && rendered === 'popular'){
            return popularAnime?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }
    }

    const checkrender=()=>{
       
 return <Item data={popularAnime}></Item>    
    }
    return (
        <>
            <div className="popular-anime">
                {popularAnime?checkrender():"Loading..."}
            </div>
         
     </>
    )
}


export default Popular