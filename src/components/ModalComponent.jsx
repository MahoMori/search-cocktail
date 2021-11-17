import React from 'react'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComponent = ({open, handleClose}) => {

    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <p>Some text</p>
                {/* <h3>{}</h3>
                <img
                    src={`${drink.strDrinkThumb}?w=164&h=164&fit=crop&auto=format`}
                    alt={drink.strDrink}
                    // onClick={handleOpen}
                    // onClick={(e) => console.log(e.target)}
                    key={drink.idDrink}
                /> */}
              </div>
            </Box>
          </Modal>
    )
}

export default ModalComponent
