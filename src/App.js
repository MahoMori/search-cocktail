import './App.css';

// import {useState} from 'react'
// import axios from 'axios'
import { Routes, Route, Link } from "react-router-dom";

// import Home from './components/Home'
// import Card from './components/Card'
// import ModalComponent from './components/ModalComponent'
import Search from './components/Search'

// import ImageList from '@mui/material/ImageList';


function App() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const [searchButton, setSearchButton] = useState(null)
  // const [buttonClicked, setButtonClicked] = useState({
  //   name: false,
  //   ingredient: false
  // })

  // const [drinksData, setDrinksData] = useState([])
  // const [searchWord, setSearchWord] = useState("")

  // const [eachDrinkData, setEachDrinkData] = useState({})

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   if(drinksData) {
  //     setDrinksData([])
  //   }

  //   switch(searchButton) {
  //     case "name":
  //       axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchWord}`).then((response) => {
  //         let drinksList = response.data.drinks
  //         if(drinksList === null) {
  //           setDrinksData("none")
  //         } else {
  //           drinksList.map(
  //             drink => setDrinksData(prevDrinksData => [...prevDrinksData, drink])
  //           )
  //         }
  //       })
  //       break

  //     case "ingredient":
  //       axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchWord}`).then((response) => {
  //         if(response.data !== "") {
  //           let drinksList = response.data.drinks
  //           drinksList.map(
  //             drink => modalIngredientData(drink.idDrink)
  //             // drink => setDrinksData(prevDrinksData => [...prevDrinksData, drink])
  //           )
  //         }else{
  //           setDrinksData("none")
  //         }
  //       })
  //       break
      
  //     default:
  //       alert("Plase select \"Search by Name\" or \"Search by Ingredient\"")
  //     }
  //   setSearchWord("")
  // }

  // const modalIngredientData = (id) => {
  //   axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((response) => {
  //     setDrinksData(prevDrinksData => [...prevDrinksData, response.data.drinks[0]])
  //     })
  // }

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
          {/* <Link to="/list"> */}
            Show Full List
          {/* </Link> */}
        </button>

        {/* <Home eachDrinkData={eachDrinkData} setEachDrinkData={setEachDrinkData} open={open} handleOpen={handleOpen} handleClose={handleClose} /> */}

        

        {/* <button
          className={
            "search-button " + (buttonClicked.name ? "button-clicked" : "")
          }
          onClick={() => {
            setSearchButton("name")
            setButtonClicked({name: true, ingredient: false})
          }}
        >Search by Name</button>

        <button
          className={
            "search-button " + (buttonClicked.ingredient ? "button-clicked" : "")
          }
          onClick={() => {
            setSearchButton("ingredient")
            setButtonClicked({name: false, ingredient: true})
          }}
        >Search by Ingredient</button>

        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Ask me..." value={searchWord} onChange={e => setSearchWord(e.target.value)} />
        </form> */}
      </header>
      
      {/* <main>
          {drinksData && drinksData !== "none"
            ? <ImageList cols={4} gap={50}>
              {drinksData.map((drink) => (
                <Card drink={drink} key={drink.idDrink} handleOpen={handleOpen} setEachDrinkData={setEachDrinkData} />
              ))}
              </ImageList>
            : <p className='no-match'>Forgive my ignorance. Could you try other words?</p>
          }
          <ModalComponent open={open} handleClose={handleClose} eachDrinkData={eachDrinkData} />
      </main> */}

      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/search" element={<Search />} />
          {/* <Route path="/list" element={<List />} /> */}
      </Routes>

    </div>
  );
}

export default App;
