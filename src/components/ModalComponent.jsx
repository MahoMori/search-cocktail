import React from 'react'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComponent = ({open, handleClose, eachDrinkData}) => {

    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <h3 className='modal-name'>{eachDrinkData.strDrink}</h3>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <img
                      className='modal-img' 
                      src={eachDrinkData.strDrinkThumb}
                      alt={eachDrinkData.strDrink}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <p>Category:</p>
                    <p>{eachDrinkData.strAlcoholic}</p>

                    <p>Alcoholic:</p>
                    <p>{eachDrinkData.strAlcoholic}</p>

                    <p>Glass:</p>
                    <p>{eachDrinkData.strGlass}</p>

                    <p>{eachDrinkData.strIngredient1}</p>
                    <p>{eachDrinkData.strMeasure1}</p>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Instruction:</p>
                    <p>{eachDrinkData.Instructions}</p>
                  </Grid>
                </Grid>
                
              </div>
            </Box>
          </Modal>
    )
}

export default ModalComponent
