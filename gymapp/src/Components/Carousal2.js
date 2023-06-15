import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 2
    },
    1024: {
        items: 4,
        itemsFit: 'contain'
    },
};

const items = [
    <img src='https://www.boldsky.com/img/1200x60x675/2015/02/14-1423904569-cover-health.jpg' style={{ width: '100%', height: '300px' }} />,
    <img src='https://st.depositphotos.com/1053932/4428/i/600/depositphotos_44286445-stock-photo-kettlebells-push-up-man-strength.jpg' style={{ width: '100%', height: '300px' }} />,
    <img src='https://img.freepik.com/free-photo/full-length-portrait-attractive-motivated-sportsgirl_171337-9033.jpg' style={{ width: '100%', height: '300px' }} />,
    <img src='https://img.freepik.com/free-photo/front-view-fit-man-with-tank-top-weights_23-2148700598.jpg' style={{ width: '100%', height: '300px' }} />,
    <img src='https://img.freepik.com/free-photo/full-length-portrait-focused-fit-sportsgirl_171337-8993.jpg' style={{ width: '100%', height: '300px' }} />,
   
];

const Carousel2 = () => (
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

export default Carousel2