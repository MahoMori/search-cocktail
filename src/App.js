import './App.css';

import {useState, useRef} from 'react'
import axios from 'axios'

function App() {
  let keyword = useRef(null)

  const [drinksData, setDrinksData] = useState([])
  // const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword.current.value}`

  const handleSearch = () => {
    axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword.current.value}`).then((response) => {
      response.data.drinks.map(
        drink => setDrinksData(prevDrinksData => [...prevDrinksData, drink])
        )
    }) 
  }

  return (
    <div className="App">
      <h1>Welcome to Bar Cocktailedge</h1>
      <h3>Your one and only (online) bartender to teach you about cocktails</h3>
      <input type="text" ref={keyword} />
      <button onClick={handleSearch}>Search</button>
      {drinksData && <div>{drinksData.map((drink, i) => <p key={i}>{drink.strDrink}</p>)}</div>}
      
    </div>
  );
}

export default App;
