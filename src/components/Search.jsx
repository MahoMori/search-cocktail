import React, { useState } from "react";
import axios from "axios";

import useMediaQuery from "@mui/material/useMediaQuery";

import Card from "./Card";
import ModalComponent from "./ModalComponent";

import { CustomImageList } from "../style";

const Search = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [searchButton, setSearchButton] = useState(null);
  const [buttonClicked, setButtonClicked] = useState({
    name: false,
    ingredient: false,
  });

  const [drinksData, setDrinksData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const [eachDrinkData, setEachDrinkData] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    if (drinksData) {
      setDrinksData([]);
    }

    switch (searchButton) {
      case "name":
        axios(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchWord}`
        ).then((response) => {
          let drinksList = response.data.drinks;
          if (drinksList === null) {
            setDrinksData("none");
          } else {
            drinksList.map((drink) =>
              setDrinksData((prevDrinksData) => [...prevDrinksData, drink])
            );
          }
        });
        break;

      case "ingredient":
        axios(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchWord}`
        ).then((response) => {
          if (response.data !== "") {
            let drinksList = response.data.drinks;
            drinksList.map((drink) => modalIngredientData(drink.idDrink));
          } else {
            setDrinksData("none");
          }
        });
        break;

      default:
        alert('Plase select "Search by Name" or "Search by Ingredient"');
    }
    setSearchWord("");
  };

  const modalIngredientData = (id) => {
    axios(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((response) => {
      setDrinksData((prevDrinksData) => [
        ...prevDrinksData,
        response.data.drinks[0],
      ]);
    });
  };

  const matches = useMediaQuery("(max-width:1023px)");

  return (
    <>
      <section className="search">
        <button
          className={
            "search-button " + (buttonClicked.name ? "button-clicked" : "")
          }
          onClick={() => {
            setSearchButton("name");
            setButtonClicked({ name: true, ingredient: false });
          }}
        >
          Search by Name
        </button>

        <button
          className={
            "search-button " +
            (buttonClicked.ingredient ? "button-clicked" : "")
          }
          onClick={() => {
            setSearchButton("ingredient");
            setButtonClicked({ name: false, ingredient: true });
          }}
        >
          Search by Ingredient
        </button>

        <form onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Ask me..."
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          {matches && (
            <button
              type="submit"
              className="search-button button-clicked"
              style={{ width: "150px", display: "block", margin: "10px auto" }}
            >
              Search
            </button>
          )}
        </form>
      </section>

      <main className="search-list-main">
        {drinksData && drinksData !== "none" ? (
          <CustomImageList cols={4} gap={50}>
            {drinksData.map((drink) => (
              <Card
                drink={drink}
                key={drink.idDrink}
                handleOpen={handleOpen}
                setEachDrinkData={setEachDrinkData}
              />
            ))}
          </CustomImageList>
        ) : (
          <p className="no-match">
            Forgive my ignorance. Could you try other words?
          </p>
        )}
        <ModalComponent
          open={open}
          handleClose={handleClose}
          eachDrinkData={eachDrinkData}
        />
      </main>
    </>
  );
};

export default Search;
