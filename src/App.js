import './App.css';

import {useState} from 'react'
import axios from 'axios'

import Card from './components/Card'
import ModalComponent from './components/ModalComponent'

import ImageList from '@mui/material/ImageList';
import OutlinedInput from '@mui/material/OutlinedInput';


function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true)};
  const handleClose = () => setOpen(false);

  const [drinksData, setDrinksData] = useState([])
  const [searchWord, setSearchWord] = useState("")

  const [eachDrinkData, setEachDrinkData] = useState({})

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
        <h1>Welcome to Bar Cocktailedge</h1>
        <h3>Your one and only (online) bartender to teach you about cocktails</h3>
        <form onSubmit={handleSearch}>
          <OutlinedInput placeholder="Search" size="small" value={searchWord} onChange={e => setSearchWord(e.target.value)} />
        </form>
      </header>
      
      <main>
          {drinksData && drinksData !== "none"
            ? <ImageList cols={4} gap={20}>
              {drinksData.map((drink) => (
                <Card drink={drink} key={drink.idDrink} handleOpen={handleOpen} setEachDrinkData={setEachDrinkData} />
              ))}
              </ImageList>
            : <p>Forgive my ignorance. Could you try other words?</p>
          }
          <ModalComponent open={open} handleClose={handleClose} eachDrinkData={eachDrinkData} />
      </main>

    </div>
  );
}

export default App;
