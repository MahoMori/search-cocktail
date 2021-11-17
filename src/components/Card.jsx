import React from 'react'

import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';

const Card = ({drink, handleOpen}) => {
    return (
        <ImageListItem key={drink.strDrinkThumb}>
            <img
                src={`${drink.strDrinkThumb}?w=164&h=164&fit=crop&auto=format`}
                alt={drink.strDrink}
                onClick={handleOpen}
            />

            <ImageListItemBar title={drink.strDrink} />
        </ImageListItem>
    )
}

export default Card
