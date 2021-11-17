import './App.css';

import {useState} from 'react'
import axios from 'axios'

import Card from './components/Card'

import ImageList from '@mui/material/ImageList';
import OutlinedInput from '@mui/material/OutlinedInput';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#000',
  color: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>

    </div>
  );
}

export default App;
