import React from "react";
import { Box } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BucketFile } from "../../Modal/GetProductCategories.modal";
import "./ProductCarousal.web.css";

interface ProductCarousalProps {
  product_images: BucketFile[];
}

const ProductCarousal = ({ product_images }: ProductCarousalProps) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <img
          src={product_images[i].file_url}
          alt="custompagging_productimage"
          className="productCarousal_customPaggingImage"
        />
      );
    },
    dots: true,
    infinite: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Box>
      <Slider {...settings}>
        {product_images.map((product_image: any) => (
          <Box
            className="productCarousal_imageContainer"
            key={product_image._id}
          >
            <img
              src={product_image.file_url}
              alt="product_image"
              className="productCarousal_image"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
export default ProductCarousal;
