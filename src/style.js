import { styled } from "@mui/material/styles";

// Search
import ImageList from "@mui/material/ImageList";

// Card
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

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
