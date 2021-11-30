import './App.css';

import axios from 'axios'

import {useState, useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";

import Home from './components/Home'
import Search from './components/Search'
import List from './components/List'


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

  useEffect(() => {
    axios('https://www.thecocktaildb.com/api/json/v1/1/random.php').then((response) => {
        setEachDrinkData(response.data.drinks[0])
    })
  }, [])

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

      </header>
        

        

      <Routes>
          <Route path="/" element={<Home eachDrinkData={eachDrinkData} setEachDrinkData={setEachDrinkData} open={open} handleOpen={handleOpen} handleClose={handleClose} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/list" element={<List setDrinksData={setDrinksData} drinksData={drinksData} handleOpen={handleOpen} setEachDrinkData={setEachDrinkData}/>} open={open} handleClose={handleClose} eachDrinkData={eachDrinkData}/>
      </Routes>

    </div>
  );
}

export default App;
