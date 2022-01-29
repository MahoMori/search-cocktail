import React from "react";

import { CustomImageListItem, CustomImageListItemBar } from "../style";

const Card = ({ drink, handleOpen, setEachDrinkData }) => {
  return (
    <>
      <CustomImageListItem
        key={drink.strDrinkThumb}
        onClick={() => {
          handleOpen();
          setEachDrinkData(drink);
        }}
      >
        <img
          src={`${drink.strDrinkThumb}?w=164&h=164&fit=crop&auto=format`}
          alt={drink.strDrink}
          key={drink.idDrink}
        />
        <CustomImageListItemBar title={drink.strDrink} />
      </CustomImageListItem>
    </>
  );
};

export default Card;
