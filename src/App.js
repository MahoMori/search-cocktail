import './App.css';

import {useState} from 'react'
import axios from 'axios'

import Card from './components/Card'
import ModalComponent from './components/ModalComponent'
import ModalComponentIngredients from './components/ModalComponentIngredients'

import ImageList from '@mui/material/ImageList';


function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [searchButton, setSearchButton] = useState(null)

  const [drinksData, setDrinksData] = useState([])
  const [searchWord, setSearchWord] = useState("")

  const [eachDrinkData, setEachDrinkData] = useState({})

  const handleSearch = (e) => {
    e.preventDefault()
    if(drinksData) {
      setDrinksData([])
    }

    switch(searchButton) {
      case "name":
        axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchWord}`).then((response) => {
          let drinksList = response.data.drinks
          if(drinksList === null) {
            setDrinksData("none")
          } else {
            drinksList.map(
              drink => setDrinksData(prevDrinksData => [...prevDrinksData, drink])
            )
          }
        })
        break

      case "ingredient":
        axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchWord}`).then((response) => {
          let drinksList = response.data.drinks
          if(drinksList === null) {
            setDrinksData("none")
          } else {
            drinksList.map(
              drink => setDrinksData(prevDrinksData => [...prevDrinksData, drink])
            )
          }
        })
        break
      
      default:
        alert("Plase select \"Search by Name\" or \"Search by Ingredient\"")
      }
    

    setSearchWord("")
  }

  return (
    <div className="App">
      <header>
        <h1>Welcome to <span class="bar-name">Bar&nbsp;Cocktailedge</span></h1>
        <h2 className="header-subtitle">Your one and only (online) bartender to teach you about cocktails</h2>
        <button className="search-button" onClick={() => setSearchButton("name")}>Search by Name</button>
        <button className="search-button" onClick={() => setSearchButton("ingredient")}>Search by Ingredient</button>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Ask me..." value={searchWord} onChange={e => setSearchWord(e.target.value)} />
        </form>
      </header>
      
      <main>
          {drinksData && drinksData !== "none"
            ? <ImageList cols={4} gap={50}>
              {drinksData.map((drink) => (
                <Card drink={drink} key={drink.idDrink} handleOpen={handleOpen} setEachDrinkData={setEachDrinkData} />
              ))}
              </ImageList>
            : <p className='no-match'>Forgive my ignorance. Could you try other words?</p>
          }
          {(() => {
            switch(searchButton) {
              case "name":
                return <ModalComponent open={open} handleClose={handleClose} eachDrinkData={eachDrinkData} />
              case "ingredient":
                return <ModalComponentIngredients open={open} handleClose={handleClose} eachDrinkData={eachDrinkData} />
              default:
                return
            }
          }
          )()
          
          
          // searchButton === "name"
          //  ? <ModalComponent open={open} handleClose={handleClose} eachDrinkData={eachDrinkData} />
           
          }
          {/* <ModalComponent open={open} handleClose={handleClose} eachDrinkData={eachDrinkData} /> */}
      </main>

    </div>
  );
}

export default App;
