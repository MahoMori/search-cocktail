import './App.css';

import {useState} from 'react'
import axios from 'axios'
import { Routes, Route, Link } from "react-router-dom";


import Card from './components/Card'
import ModalComponent from './components/ModalComponent'
import Search from './components/Search'
import List from './components/List'

import ImageList from '@mui/material/ImageList';


function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [searchButton, setSearchButton] = useState(null)
  const [buttonClicked, setButtonClicked] = useState({
    name: false,
    ingredient: false
  })

  const [drinksData, setDrinksData] = useState([])
  const [searchWord, setSearchWord] = useState("")

  const [eachDrinkData, setEachDrinkData] = useState({})

  return (
    <div className="App">
      <header>
        <h1>Welcome to <span className="bar-name">Bar&nbsp;Cocktailedge</span></h1>
        <h2 className="header-subtitle">Your one and only (online) bartender to teach you about cocktails</h2>
        
        <button className="keywords-or-list">
          <Link to="/search">
            Search with Keywords
          </Link>
        </button>
        <button className="keywords-or-list">
          <Link to="/list">
            Show Full List
          </Link>
        </button>

        {/* <Home eachDrinkData={eachDrinkData} setEachDrinkData={setEachDrinkData} open={open} handleOpen={handleOpen} handleClose={handleClose} /> */}
      </header>
        

        

      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="/list" element={<List setDrinksData={setDrinksData} drinksData={drinksData} handleOpen={handleOpen} setEachDrinkData={setEachDrinkData}/>} open={open} handleClose={handleClose} eachDrinkData={eachDrinkData}/>
      </Routes>

    </div>
  );
}

export default App;
