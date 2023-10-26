import React from "react";
import { Box, Typography } from "@material-ui/core";
import Slider from "react-slick";
import CustomCard from "../CustomCard/CustomCard.web";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import { Colors } from "../../Constants/Colors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomCarousal.web.css";

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
const CustomCarousal = () => {
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

  const customData = [
    {
      product_title: "Amul Quality Ghee",
      product_size: "1000g",
      product_MRP_price: 500,
      product_price: 450,
      search_name: "amul ghee",
      product_description:
        "Amul ghee is a good source of energy and can be consumed for better digestion. It is rich in nutrients and provides vitality to the human body. Made from fresh cream, this ghee ensures a rich aroma and granular texture. It is a vegetarian product and does not contain any artificial colours or added preservatives. It provides fat-soluble vitamin A, D, K, and E and helps to reduce the risk of cardiovascular problems. Its Vitamin A component will improve your eye health. Amul ghee price 1 kg comes in a pouch and also in tetra packs, which are travel-friendly and easy to use There is a wide range of Amul ghee packs available online in different forms and price ranges. Pure ghee and cow ghee are two of the most popular products available in stock. You can check the product label, if you want to know more about Amul ghee price. This ghee from Amul is made from natural ingredients and is safe to use. By consuming this product, you can boost your memory power and multiply the taste manifold. Add a spoon of ghee to your food and get the richness of its flavour and aroma. Ghee 1 kg price can be ordered online from the comfort of your home.",
      product_images: [
        {
          _id: "6537650f1134953c4fa8775c",
          file_name: "1698129166538_IceCreamChoclate.png",
          file_size: 58322,
          file_key: "1698129166538_IceCreamChoclate.png",
          file_url:
            "https://rajabali-dowadji-store-bucket.s3.ap-south-1.amazonaws.com/1698129166538_IceCreamChoclate.png",
          createdAt: "2023-10-24T06:32:47.088Z",
          updatedAt: "2023-10-24T06:32:47.088Z",
        },
      ],
    },
    {
      product_title: "Amul Quality Ghee",
      product_size: "1000g",
      product_MRP_price: 500,
      product_price: 450,
      search_name: "amul ghee",
      product_description:
        "Amul ghee is a good source of energy and can be consumed for better digestion. It is rich in nutrients and provides vitality to the human body. Made from fresh cream, this ghee ensures a rich aroma and granular texture. It is a vegetarian product and does not contain any artificial colours or added preservatives. It provides fat-soluble vitamin A, D, K, and E and helps to reduce the risk of cardiovascular problems. Its Vitamin A component will improve your eye health. Amul ghee price 1 kg comes in a pouch and also in tetra packs, which are travel-friendly and easy to use There is a wide range of Amul ghee packs available online in different forms and price ranges. Pure ghee and cow ghee are two of the most popular products available in stock. You can check the product label, if you want to know more about Amul ghee price. This ghee from Amul is made from natural ingredients and is safe to use. By consuming this product, you can boost your memory power and multiply the taste manifold. Add a spoon of ghee to your food and get the richness of its flavour and aroma. Ghee 1 kg price can be ordered online from the comfort of your home.",
      product_images: [
        {
          _id: "6537650f1134953c4fa8775c",
          file_name: "1698129166538_IceCreamChoclate.png",
          file_size: 58322,
          file_key: "1698129166538_IceCreamChoclate.png",
          file_url:
            "https://rajabali-dowadji-store-bucket.s3.ap-south-1.amazonaws.com/1698129166538_IceCreamChoclate.png",
          createdAt: "2023-10-24T06:32:47.088Z",
          updatedAt: "2023-10-24T06:32:47.088Z",
        },
      ],
    },
    {
      product_title: "Amul Quality Ghee",
      product_size: "1000g",
      product_MRP_price: 500,
      product_price: 450,
      search_name: "amul ghee",
      product_description:
        "Amul ghee is a good source of energy and can be consumed for better digestion. It is rich in nutrients and provides vitality to the human body. Made from fresh cream, this ghee ensures a rich aroma and granular texture. It is a vegetarian product and does not contain any artificial colours or added preservatives. It provides fat-soluble vitamin A, D, K, and E and helps to reduce the risk of cardiovascular problems. Its Vitamin A component will improve your eye health. Amul ghee price 1 kg comes in a pouch and also in tetra packs, which are travel-friendly and easy to use There is a wide range of Amul ghee packs available online in different forms and price ranges. Pure ghee and cow ghee are two of the most popular products available in stock. You can check the product label, if you want to know more about Amul ghee price. This ghee from Amul is made from natural ingredients and is safe to use. By consuming this product, you can boost your memory power and multiply the taste manifold. Add a spoon of ghee to your food and get the richness of its flavour and aroma. Ghee 1 kg price can be ordered online from the comfort of your home.",
      product_images: [
        {
          _id: "6537650f1134953c4fa8775c",
          file_name: "1698129166538_IceCreamChoclate.png",
          file_size: 58322,
          file_key: "1698129166538_IceCreamChoclate.png",
          file_url:
            "https://rajabali-dowadji-store-bucket.s3.ap-south-1.amazonaws.com/1698129166538_IceCreamChoclate.png",
          createdAt: "2023-10-24T06:32:47.088Z",
          updatedAt: "2023-10-24T06:32:47.088Z",
        },
      ],
    },
    {
      product_title:
        "Amul Quality Amul ghee is a good source of energy and can be consumed for better digestion. It is",
      product_size: "1000g",
      product_MRP_price: 500,
      product_price: 450,
      search_name: "amul ghee",
      product_description:
        "Amul ghee is a good source of energy and can be consumed for better digestion. It is rich in nutrients and provides vitality to the human body. Made from fresh cream, this ghee ensures a rich aroma and granular texture. It is a vegetarian product and does not contain any artificial colours or added preservatives. It provides fat-soluble vitamin A, D, K, and E and helps to reduce the risk of cardiovascular problems. Its Vitamin A component will improve your eye health. Amul ghee price 1 kg comes in a pouch and also in tetra packs, which are travel-friendly and easy to use There is a wide range of Amul ghee packs available online in different forms and price ranges. Pure ghee and cow ghee are two of the most popular products available in stock. You can check the product label, if you want to know more about Amul ghee price. This ghee from Amul is made from natural ingredients and is safe to use. By consuming this product, you can boost your memory power and multiply the taste manifold. Add a spoon of ghee to your food and get the richness of its flavour and aroma. Ghee 1 kg price can be ordered online from the comfort of your home.",
      product_images: [
        {
          _id: "6537650f1134953c4fa8775c",
          file_name: "1698129166538_IceCreamChoclate.png",
          file_size: 58322,
          file_key: "1698129166538_IceCreamChoclate.png",
          file_url:
            "https://rajabali-dowadji-store-bucket.s3.ap-south-1.amazonaws.com/1698129166538_IceCreamChoclate.png",
          createdAt: "2023-10-24T06:32:47.088Z",
          updatedAt: "2023-10-24T06:32:47.088Z",
        },
      ],
    },
    {
      product_title: "Amul Quality Ghee",
      product_size: "1000g",
      product_MRP_price: 500,
      product_price: 450,
      search_name: "amul ghee",
      product_description:
        "Amul ghee is a good source of energy and can be consumed for better digestion. It is rich in nutrients and provides vitality to the human body. Made from fresh cream, this ghee ensures a rich aroma and granular texture. It is a vegetarian product and does not contain any artificial colours or added preservatives. It provides fat-soluble vitamin A, D, K, and E and helps to reduce the risk of cardiovascular problems. Its Vitamin A component will improve your eye health. Amul ghee price 1 kg comes in a pouch and also in tetra packs, which are travel-friendly and easy to use There is a wide range of Amul ghee packs available online in different forms and price ranges. Pure ghee and cow ghee are two of the most popular products available in stock. You can check the product label, if you want to know more about Amul ghee price. This ghee from Amul is made from natural ingredients and is safe to use. By consuming this product, you can boost your memory power and multiply the taste manifold. Add a spoon of ghee to your food and get the richness of its flavour and aroma. Ghee 1 kg price can be ordered online from the comfort of your home.",
      product_images: [
        {
          _id: "6537650f1134953c4fa8775c",
          file_name: "1698129166538_IceCreamChoclate.png",
          file_size: 58322,
          file_key: "1698129166538_IceCreamChoclate.png",
          file_url:
            "https://rajabali-dowadji-store-bucket.s3.ap-south-1.amazonaws.com/1698143662393_babycare.png",
          createdAt: "2023-10-24T06:32:47.088Z",
          updatedAt: "2023-10-24T06:32:47.088Z",
        },
      ],
    },
    {
      product_title: "Amul Quality Ghee",
      product_size: "1000g",
      product_MRP_price: 500,
      product_price: 450,
      search_name: "amul ghee",
      product_description:
        "Amul ghee is a good source of energy and can be consumed for better digestion. It is rich in nutrients and provides vitality to the human body. Made from fresh cream, this ghee ensures a rich aroma and granular texture. It is a vegetarian product and does not contain any artificial colours or added preservatives. It provides fat-soluble vitamin A, D, K, and E and helps to reduce the risk of cardiovascular problems. Its Vitamin A component will improve your eye health. Amul ghee price 1 kg comes in a pouch and also in tetra packs, which are travel-friendly and easy to use There is a wide range of Amul ghee packs available online in different forms and price ranges. Pure ghee and cow ghee are two of the most popular products available in stock. You can check the product label, if you want to know more about Amul ghee price. This ghee from Amul is made from natural ingredients and is safe to use. By consuming this product, you can boost your memory power and multiply the taste manifold. Add a spoon of ghee to your food and get the richness of its flavour and aroma. Ghee 1 kg price can be ordered online from the comfort of your home.",
      product_images: [
        {
          _id: "6537650f1134953c4fa8775c",
          file_name: "1698129166538_IceCreamChoclate.png",
          file_size: 58322,
          file_key: "1698129166538_IceCreamChoclate.png",
          file_url:
            "https://rajabali-dowadji-store-bucket.s3.ap-south-1.amazonaws.com/1698143662393_babycare.png",
          createdAt: "2023-10-24T06:32:47.088Z",
          updatedAt: "2023-10-24T06:32:47.088Z",
        },
      ],
    },
    {
      product_title: "Amul Quality Ghee",
      product_size: "1000g",
      product_MRP_price: 500,
      product_price: 450,
      search_name: "amul ghee",
      product_description:
        "Amul ghee is a good source of energy and can be consumed for better digestion. It is rich in nutrients and provides vitality to the human body. Made from fresh cream, this ghee ensures a rich aroma and granular texture. It is a vegetarian product and does not contain any artificial colours or added preservatives. It provides fat-soluble vitamin A, D, K, and E and helps to reduce the risk of cardiovascular problems. Its Vitamin A component will improve your eye health. Amul ghee price 1 kg comes in a pouch and also in tetra packs, which are travel-friendly and easy to use There is a wide range of Amul ghee packs available online in different forms and price ranges. Pure ghee and cow ghee are two of the most popular products available in stock. You can check the product label, if you want to know more about Amul ghee price. This ghee from Amul is made from natural ingredients and is safe to use. By consuming this product, you can boost your memory power and multiply the taste manifold. Add a spoon of ghee to your food and get the richness of its flavour and aroma. Ghee 1 kg price can be ordered online from the comfort of your home.",
      product_images: [
        {
          _id: "6537650f1134953c4fa8775c",
          file_name: "1698129166538_IceCreamChoclate.png",
          file_size: 58322,
          file_key: "1698129166538_IceCreamChoclate.png",
          file_url:
            "https://rajabali-dowadji-store-bucket.s3.ap-south-1.amazonaws.com/1698143662393_babycare.png",
          createdAt: "2023-10-24T06:32:47.088Z",
          updatedAt: "2023-10-24T06:32:47.088Z",
        },
      ],
    },
    {
      product_title: "Amul Quality Ghee",
      product_size: "1000g",
      product_MRP_price: 500,
      product_price: 450,
      search_name: "amul ghee",
      product_description:
        "Amul ghee is a good source of energy and can be consumed for better digestion. It is rich in nutrients and provides vitality to the human body. Made from fresh cream, this ghee ensures a rich aroma and granular texture. It is a vegetarian product and does not contain any artificial colours or added preservatives. It provides fat-soluble vitamin A, D, K, and E and helps to reduce the risk of cardiovascular problems. Its Vitamin A component will improve your eye health. Amul ghee price 1 kg comes in a pouch and also in tetra packs, which are travel-friendly and easy to use There is a wide range of Amul ghee packs available online in different forms and price ranges. Pure ghee and cow ghee are two of the most popular products available in stock. You can check the product label, if you want to know more about Amul ghee price. This ghee from Amul is made from natural ingredients and is safe to use. By consuming this product, you can boost your memory power and multiply the taste manifold. Add a spoon of ghee to your food and get the richness of its flavour and aroma. Ghee 1 kg price can be ordered online from the comfort of your home.",
      product_images: [
        {
          _id: "6537650f1134953c4fa8775c",
          file_name: "1698129166538_IceCreamChoclate.png",
          file_size: 58322,
          file_key: "1698129166538_IceCreamChoclate.png",
          file_url:
            "https://rajabali-dowadji-store-bucket.s3.ap-south-1.amazonaws.com/1698143662393_babycare.png",
          createdAt: "2023-10-24T06:32:47.088Z",
          updatedAt: "2023-10-24T06:32:47.088Z",
        },
      ],
    },
  ];
  return (
    <Box>
      <Box className="customCarousal_titleContainer">
        <Typography className="customCarousal_titleText">Vegitables</Typography>
        <Typography className="customCarousal_moreBtnTxt">see more</Typography>
      </Box>
      <Box>
        <Slider {...settings}>
          {customData.map((product: any) => (
            <CustomCard product={product} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
export default CustomCarousal;
