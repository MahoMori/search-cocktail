import React from "react";
import "../App.css";

import { useEffect } from "react";
import axios from "axios";

import Card from "./Card";
import ModalComponent from "./ModalComponent";

import ImageList from "@mui/material/ImageList";
import { CustomImageList } from "../style";

const ListComponent = ({
  setLetter,
  letter,
  setDrinksData,
  drinksData,
  handleOpen,
  setEachDrinkData,
  open,
  handleClose,
  eachDrinkData,
}) => {
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
      {drinksData && drinksData !== "none" ? (
        <>
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
        </>
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
    </>
  );
};

export default ListComponent;
