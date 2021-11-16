import './App.css';

import {useState} from 'react'
import axios from 'axios'

import Card from './components/Card'

import ImageList from '@mui/material/ImageList';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

function App() {

  const [drinksData, setDrinksData] = useState([])
  const [searchWord, setSearchWord] = useState("")

  const handleSearchWord = (e) => {
    if(e.key === "Enter") {
      handleSearch(searchWord)
    } else if(e.key >= 48 || e.key <=57 || e.key >= 65 || e.key <= 90) {
      setSearchWord(prevSearchWord => prevSearchWord + e.key)
    }
  }

  const handleSearch = (word) => {
    if(drinksData) {
      setDrinksData([])
    }

    axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`).then((response) => {
      let drinksList = response.data.drinks
      if(drinksList === null) {
        setDrinksData("none")
      } else {
        drinksList.map(
          drink => setDrinksData(prevDrinksData => [...prevDrinksData, drink])
        )
      }
    })

    setSearchWord("")
  }

  return (
    <div className="App">
      <header>
        <h1>Welcome to Bar Cocktailedge</h1>
        <h3>Your one and only (online) bartender to teach you about cocktails</h3>
        <OutlinedInput placeholder="Search" size="small" onKeyDown={handleSearchWord} />
        {/* <Button variant="outlined" onClick={handleSearch}>Search</Button> */}
        {/* {drinksData && <div>{drinksData.map((drink, i) => <p key={i}>{drink.strDrink}</p>)}</div>} */}
      </header>
      
      <main>
          {drinksData && drinksData !== "none"
            ? <ImageList cols={4} gap={20}>
              {drinksData.map((drink, key) => (
                <Card drink={drink} key={key} />
              ))}
              </ImageList>
            : <p>Forgive my ignorance. Could you try other words?</p>
          }
      </main>

    </div>
  );
}

export default App;
