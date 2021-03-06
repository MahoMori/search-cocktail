import React from "react";

import { useEffect } from "react";

import axios from "axios";

import Card from "./Card";
import ModalComponent from "./ModalComponent";

const Home = ({
  eachDrinkData,
  setEachDrinkData,
  open,
  handleOpen,
  handleClose,
}) => {
  useEffect(() => {
    axios("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
      (response) => {
        setEachDrinkData(response.data.drinks[0]);
      }
    );
  }, [setEachDrinkData]);

  return (
    <div className="home">
      <h2 className="special-txt">Bartendar's Special</h2>
      <div className="special-img">
        <Card
          drink={eachDrinkData}
          key={eachDrinkData.idDrink}
          handleOpen={handleOpen}
          setEachDrinkData={setEachDrinkData}
        />
        <ModalComponent
          open={open}
          handleClose={handleClose}
          eachDrinkData={eachDrinkData}
        />
      </div>
    </div>
  );
};

export default Home;
