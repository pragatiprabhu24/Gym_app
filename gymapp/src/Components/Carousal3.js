import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 1
    },
    1024: {
        items: 2,
        itemsFit: 'contain'
    },
};

const items = [
    <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/exigo-trainer-3.jpg' style={{ width: '100%', height: '100%' }} />,
    <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/exigo-trainer-2.jpg' style={{ width: '100%', height: '100%'}} />,
    <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/exigo-trainer-1.jpg' style={{ width: '100%', height: '100%'}} />,
    <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/exigo-trainer-2.jpg' style={{width: '100%', height: '100%'}}/>,
   
   
];

const Carousel3 = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        infinite
        disableDotsControls
        disableButtonsControls
        autoPlay
    />
);

export default Carousel3