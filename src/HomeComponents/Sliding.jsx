import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
// import { fetchBinanceData } from "../utils/fetchBinanceData";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Sliding() {
  const [slider, setSlider] = React.useState(null);

  //  images used in the slide
  const prevDoctorImage =
    "https://wallpapers.com/images/featured/doctor-kwucobzhm0etbcwy.jpg";

  const cards = [
    "https://wallpapers.com/images/featured/flying-doctor-strange-minimalist-zcm19c5hjix7kc1e.jpg",
  ];

  return (
    <>
      <Box
        position={"relative"}
        height={"600px"}
        width={"full"}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Box position="absolute" />
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <>
              <Box
                key={index}
                height={"6xl"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${url})`}
              />
              <h1>vic</h1>
            </>
          ))}
        </Slider>
      </Box>
    </>
  );
}
