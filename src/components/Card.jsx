import React from 'react'

import ModalComponent from './ModalComponent'

import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';

const Card = ({drink, handleOpen, open, handleClose}) => {
    return (
        <>
            <ImageListItem key={drink.strDrinkThumb} onClick={handleOpen}>
                <img
                    src={`${drink.strDrinkThumb}?w=164&h=164&fit=crop&auto=format`}
                    alt={drink.strDrink}
                    key={drink.idDrink}
                />
                <ImageListItemBar title={drink.strDrink} />
            </ImageListItem>
            
        </>
    )
}

export default Card
