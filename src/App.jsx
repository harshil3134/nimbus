

import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";
import { useGlobalContext } from './context/global'
import Homepage from "./Components/Homepage"
import AnimeItem from './Components/AnimeItem';
import Gallery from './Components/Gallery';


function App() {

  return (
<BrowserRouter>
<Routes>

  <Route path="/" element={<Homepage />} />
  <Route path="/home" element={<Homepage />} />
  <Route path="/anime/:id" element={<AnimeItem />}/>
   <Route path="/character/:id" element={<Gallery />} />
</Routes>
</BrowserRouter>
  )
}

export default App
