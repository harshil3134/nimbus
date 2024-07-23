import React from 'react'
import "../css/navbar.css"
import logo from "../assets/logo_img.png"
import {Link} from 'react-router-dom'
import { useGlobalContext} from '../context/global'
import Popular from './Popular'
import Airing from './Airing'
import Upcoming from './Upcoming'

function Navbar() {
  const {handleSubmit, 
    search, 
    searchAnime,
    handleChange ,
    getUpcomingAnime,
    getAiringAnime,
    getPopularAnime,
} = useGlobalContext()

  const [rendered, setRendered] = React.useState('popular');

  const switchComponent = () => {
    switch(rendered){
        case 'popular':
            return <Popular rendered={rendered} />
        case 'airing':
            return <Airing rendered={rendered} />
        case 'upcoming':
            return <Upcoming rendered={rendered} />
        default:
            return <Popular rendered={rendered} />
    }
}


  return (
   <>
  <nav className="navbar">
  
    <div className='logo'>
       <img className="" src={logo} alt='img'></img>
    </div>
   
    <div className='optioncontainer'>

         <div className='element'onClick={()=>setRendered('popular')} >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" ><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/></svg>
              <div className='name'>
                Popular
              </div>
          </div> 
          <div className='element' onClick={()=>{setRendered('airing');  getAiringAnime()}}>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
             </svg>
              <div className='name'>
              Airing
              </div>
           </div>
          <div className='element' onClick={()=>{setRendered('upcoming'); getUpcomingAnime()}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
              <div className='name'>
              Upcoming
              </div>
            </div>
        
    </div>
    <form action="" className="search-form" >
                        <div className="input-control">
                            <input type="text" placeholder="Search Anime"   />
                            <button type="submit">Search</button>
                        </div>
    </form>
  
   
  </nav>

{switchComponent()}
   </>
  )
}

export default Navbar


// #c9e964
// #1f2326