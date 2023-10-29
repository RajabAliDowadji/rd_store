import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Slider from "react-slick";
import CustomCard from "../CustomCard/CustomCard.web";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import { Product } from "../../Modal/GetProducts.modal";
import { useNavigate } from "react-router-dom";
import { ProductCategory } from "../../Modal/GetProductCategories.modal";
import { Colors } from "../../Constants/Colors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomCarousal.web.css";

interface CustomCarousalProps {
  products: Product[];
  category: ProductCategory | null;
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ChevronRightRoundedIcon
      className={className}
      style={{
        ...style,
        display: "block",
        background: Colors.gray,
        color: Colors.white,
        fontSize: "20px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ChevronLeftRoundedIcon
      className={className}
      style={{
        ...style,
        display: "block",
        background: Colors.gray,
        color: Colors.white,
        fontSize: "20px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
const CustomCarousal = ({ products, category }: CustomCarousalProps) => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const seeMoreClickHandle = () => {
    if (category) {
      navigate(`/products/${category._id}`);
    }
  };

  return (
    <Box>
      <Box className="customCarousal_titleContainer">
        <Typography className="customCarousal_titleText">
          {category && category.category_name}
        </Typography>
        <Typography
          className="customCarousal_moreBtnTxt"
          onClick={seeMoreClickHandle}
        >
          see more
        </Typography>
      </Box>
      <Box>
        {products.length > 6 ? (
          <Slider {...settings}>
            {products.map((product: any) => (
              <CustomCard product={product} />
            ))}
          </Slider>
        ) : (
          <Grid container>
            {products.map((product: any) => (
              <Grid item key={product._id} xs={12} sm={6} md={2} lg={2}>
                <CustomCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};
export default CustomCarousal;
