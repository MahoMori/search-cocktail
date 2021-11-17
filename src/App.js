import './App.css';

import {useState} from 'react'
import axios from 'axios'

import Card from './components/Card'

import ImageList from '@mui/material/ImageList';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';


function App() {

  const [drinksData, setDrinksData] = useState([])
  const [searchWord, setSearchWord] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    if(drinksData) {
      setDrinksData([])
    }

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

    setSearchWord("")
  }

  return (
    <div className="App">
      <header>
        <h1>Welcome to <span class="bar-name">Bar Cocktailedge</span></h1>
        <h2>Your one and only (online) bartender to teach you about cocktails</h2>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Ask me..." value={searchWord} onChange={e => setSearchWord(e.target.value)} />
          {/* <OutlinedInput placeholder="Search" size="small" value={searchWord} onChange={e => setSearchWord(e.target.value)} />
          <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        </form>
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
