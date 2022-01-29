import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

import ImageListComponent from "./ImageListComponent";

const alphanumeric = "0123456789abcdefghijklmnopqrstuvwxyz";

const List = ({
  setDrinksData,
  drinksData,
  handleOpen,
  setEachDrinkData,
  open,
  handleClose,
  eachDrinkData,
}) => {
  const [letter, setLetter] = useState("");

  useEffect(() => {
    if (letter) {
      axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      ).then((response) => {
        let drinksList = response.data.drinks;
        setDrinksData([]);
        if (drinksList === null) {
          setDrinksData("none");
        } else {
          drinksList.map((drink) =>
            setDrinksData((prevDrinksData) => [...prevDrinksData, drink])
          );
        }
        setLetter("");
      });
    }
  }, [letter]);

  return (
    <>
      <section className="list">
        <ul>
          {alphanumeric.split("").map((letter, i) => (
            <li
              key={i}
              onClick={() => {
                setLetter(letter);
              }}
              className="list-li"
            >
              {letter}
            </li>
          ))}
        </ul>
        <div className="clr"></div>
      </section>

      <ImageListComponent
        drinksData={drinksData}
        handleOpen={handleOpen}
        setEachDrinkData={setEachDrinkData}
        open={open}
        handleClose={handleClose}
        eachDrinkData={eachDrinkData}
      />
    </>
  );
};

export default List;
