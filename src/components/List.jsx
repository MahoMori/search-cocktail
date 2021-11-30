import React from 'react'

import {useState} from 'react'
import { Routes, Route, Link, useParams } from "react-router-dom";

import ListComponent from './ListComponent'
import Test from './Test'

const alphanumeric = '0123456789abcdefghijklmnopqrstuvwxyz'

const List = ({setDrinksData, drinksData, handleOpen, setEachDrinkData, open, handleClose, eachDrinkData}) => {
    let {slug} = useParams()
    const [letter, setLetter] = useState('')

    return (
        <div>
            {alphanumeric.split('').map((letter, i) => (
                <ul>
                    <li key={i} onClick={() => {setLetter(letter)}} style={{color: 'white'}}>{letter}</li>
                </ul>
            ))}
            <ListComponent letter={letter} setLetter={setLetter} drinksData={drinksData} setDrinksData={setDrinksData} handleOpen={handleOpen} setEachDrinkData={setEachDrinkData} open={open} handleClose={handleClose} eachDrinkData={eachDrinkData}/>
        </div>
    )
}

export default List