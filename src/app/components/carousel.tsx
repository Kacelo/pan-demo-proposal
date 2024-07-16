// components/LogoCarousel.js
import * as React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
// import { Container } from "postcss";
import Container from "@mui/material/Container";

const logos = [
  { src: "/images/logos/Cybersecurity.png", alt: "Logo 1" },
  { src: "/images/logos/bankwhk.png", alt: "Logo 2" },
  { src: "/images/logos/BON_logo.png", alt: "Logo 3" },
  { src: "/images/logos/fnb.png", alt: "Logo 4" },
  { src: "/images/logos/lets.png", alt: "Logo 4" },
  { src: "/images/logos/logo.png", alt: "Logo 4" },
  { src: "/images/logos/ned.png", alt: "Logo 4" },
  { src: "/images/logos/stand.png", alt: "Logo 4" },
  { src: "/images/logos/trust.png", alt: "Logo 4" },

  // Add more logos as needed
];

const LogoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="xl">
    <Container maxWidth="xl">
        <Typography variant="h4" align="left" style={{ color: "black" }}>
          Members of The Payments Association
        </Typography>
      </Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box key={index} sx={{ padding: 2 }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={200}
                objectFit="contain"
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default LogoCarousel;
