import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
import { slidesData } from "../../utils/images/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
      <Container>
        <Title>Our best sellers</Title>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
           <SliderContainer key={index}>
           <ProductTitle>{slide.title}</ProductTitle>
           {slide.url && <ImageSlider src={slide.url} alt={slide.title} />}
         </SliderContainer>
        ))}
      </Slider>
    </Container>
    );
  };

  const ImageSlider = styled.img`
  height:500px;
  text-align: center;
  border-radius: 12px;
margin:0 auto;
margin-bottom:20px;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  padding:20px;
`;

  const ProductTitle = styled.p`
  width: 100%;
  text-align: center;
  padding:20px;
  font-size:20px;
`;
  const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

`;

  const Container = styled.div`
    background-color: #efe8dd;
    height:100vh;
  `