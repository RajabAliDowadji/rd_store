import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Theme,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import "./CustomCard.web.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Colors } from "../../Constants/Colors";
import { Product } from "../../Modal/GetProducts.modal";

interface CustomCardProps {
  product: Product;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: 10,
    },
    media: {
      height: 0,
      paddingTop: "70%",
      backgroundColor: Colors.background,
      backgroundSize: "contain",
    },
  })
);

const CustomCard = ({ product }: CustomCardProps) => {
  const classes = useStyles();

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          title="Paella dish"
        />
        <CardContent className="cardContent">
          <Typography className="cardTitle">{product.product_title}</Typography>
        </CardContent>
        <CardContent className="cardContent">
          <Box className="cardContentContainer">
            <Box>
              <Typography className="cardSubTitle">
                ₹{product.product_price}
              </Typography>
              <Typography className="cardSizeTitle">
                {product.product_size}
              </Typography>
            </Box>
            <CardActions>
              <IconButton aria-label="add to cart">
                <AddCircleOutlineIcon className="addCartIcon" />
              </IconButton>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default CustomCard;
