import './App.css';

import {useState, useRef} from 'react'
import axios from 'axios'

function App() {
  let keyword = useRef(null)

  const [drinksData, setDrinksData] = useState([])
  // const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword.current.value}`

  const handleSearch = () => {
    let drinksArr = []
    axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword.current.value}`).then((response) => {
      response.data.drinks.map(drink => drinksArr.push(drink))
      console.log(drinksArr)
      setDrinksData(drinksArr)
    })  
    
  }

  return (
    <div className="App">
      <h1>Welcome to Bar Cocktailedge</h1>
      <h3>Your one and only (online) bartender to teach you about cocktails</h3>
      <input type="text" ref={keyword} />
      <button onClick={handleSearch}>Search</button>
      {drinksData && <div>{drinksData}</div>}
      
    </div>
  );
}

export default App;
