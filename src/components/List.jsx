import React from "react";

import { useState } from "react";

import ListComponent from "./ListComponent";

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

      <main className="search-list-main">
        <ListComponent
          letter={letter}
          setLetter={setLetter}
          drinksData={drinksData}
          setDrinksData={setDrinksData}
          handleOpen={handleOpen}
          setEachDrinkData={setEachDrinkData}
          open={open}
          handleClose={handleClose}
          eachDrinkData={eachDrinkData}
        />
      </main>
    </>
  );
};

export default List;
