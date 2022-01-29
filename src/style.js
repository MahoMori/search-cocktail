import { styled } from "@mui/material/styles";

// Search
import ImageList from "@mui/material/ImageList";

// Card
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

// ModalComponent
import Box from "@mui/material/Box";

// --------------------------
// Search
export const CustomImageList = styled(ImageList)(({ theme }) => ({
  margin: "80px auto",

  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "1fr !important",
    gap: "30px !important",
  },

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr) !important",
    gap: "30px !important",
  },

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, 1fr) !important",
    gap: "30px !important",
  },

  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(5, 1fr) !important",
    gap: "50px !important",
  },
}));

// Card
export const CustomImageListItem = styled(ImageListItem)(() => ({
  cursor: "pointer",
}));

export const CustomImageListItemBar = styled(ImageListItemBar)(() => ({
  letterSpacing: "0.05rem",
  fontWeight: "bold",
  fontFamily: "'Arima Madurai', cursive",
}));

// ModalComponent
export const CustomBox = styled(Box)(({ theme }) => ({
  fontFamily: "'Arima Madurai', cursive",
  "-ms-overflow-style": "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  backgroundColor: "#d1d1d1",
  border: "2px solid #000",
  boxShadow: "24px",
  padding: "32px",
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  [theme.breakpoints.up("xs")]: { height: "380px" },
  [theme.breakpoints.up("md")]: { height: "450px" },
  [theme.breakpoints.up("xl")]: { height: "800px" },
}));
