// import React from 'react'

// import axios from 'axios'

// import Card from './Card'
// import ModalComponent from './ModalComponent'

// const Home = ({eachDrinkData, setEachDrinkData, open, handleOpen, handleClose}) => {

//     axios('https://www.thecocktaildb.com/api/json/v1/1/random.php').then((response) => {
//         setEachDrinkData(response.data.drinks)
//     })

//     return (
//         <div>
//             <h2>Today's Special</h2>
//             <Card drink={eachDrinkData} key={eachDrinkData.idDrink} handleOpen={handleOpen} setEachDrinkData={setEachDrinkData}/>
//             <ModalComponent open={open} handleClose={handleClose} eachDrinkData={eachDrinkData} />
//         </div>
//     )
// }

// export default Home