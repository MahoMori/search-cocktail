import Card from "./Card";
import ModalComponent from "./ModalComponent";

import { CustomImageList } from "../style";

const ImageListComponent = ({
  drinksData,
  handleOpen,
  setEachDrinkData,
  open,
  handleClose,
  eachDrinkData,
}) => {
  return (
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
  );
};

export default ImageListComponent;
