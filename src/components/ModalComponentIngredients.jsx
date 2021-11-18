import React from 'react'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: 450,
  bgcolor: '#d1d1d1',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComponentIngredients = ({open, handleClose, eachDrinkData}) => {

    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <h1 className='modal-name'>- {eachDrinkData.strDrink} -</h1>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <img
                      className='modal-img' 
                      src={eachDrinkData.strDrinkThumb}
                      alt={eachDrinkData.strDrink}
                    />
                  </Grid>

                  <Grid item xs={4}>

                      <div className='modal-child-column'>
                        <p className="modal-item-title">Category:</p>
                        <p>{eachDrinkData.strCategory}</p>
                      </div>

                      <div className='modal-child-column'>
                        <p className="modal-item-title">Alcoholic:</p>
                        <p>{eachDrinkData.strAlcoholic}</p>
                      </div>

                      <div className='modal-child-column'>
                        <p className="modal-item-title">Glass:</p>
                        <p>{eachDrinkData.strGlass}</p>
                      </div>

                      <p className="modal-item-title">Ingredients:</p>
                      <div className='ingredients-measures'>
                        {(() => {
                          let ingredients = []
                          for(let i = 1; i <= 15; i++){
                            if(eachDrinkData[`strIngredient${i}`]) {
                              ingredients.push(<p>{eachDrinkData[`strIngredient${i}`]}</p>)
                            }
                          }
                          return <div>{ingredients}</div>
                        })()}

                        {(() => {
                          let measure = []
                          for(let i = 1; i <= 15; i++){
                            if(eachDrinkData[`strMeasure${i}`]) {
                              measure.push(<p>{eachDrinkData[`strMeasure${i}`]}</p>)
                            }
                          }
                          return <div>{measure}</div>
                        })()}
                      </div>
                    
                    
                  </Grid>
                  <Grid item xs={4}>
                    <p className="modal-item-title">Instruction:</p>
                    <p>{eachDrinkData.strInstructions}</p>
                  </Grid>
                </Grid>
                
              </div>
            </Box>
          </Modal>
    )
}

export default ModalComponentIngredients
