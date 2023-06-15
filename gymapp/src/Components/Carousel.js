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
    <img src='https://assets.sweat.com/shopify_articles/images/010/005/285/original/BackToGymSWEATf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801362' style={{ width: '27rem', height: '20rem' }} />,
    <img src='https://i.pinimg.com/originals/ba/59/c2/ba59c2fe8d3f77e65a819f90ae8d0daa.jpg' style={{ width: '27rem', height: '20rem' }} />,
    <img src='https://t3.ftcdn.net/jpg/01/48/87/16/360_F_148871674_wRvPIuNEwxUI1jHadVrb5uoV7C2Sv27i.jpg' style={{ width: '27rem', height: '20rem' }} />,
    <img src='https://cdn.vibecity.in/providers/62923e36a147b70011418ef2/1a78f763-ca28-4512-be29-9a9a2bfe91b0_c1a4c9d2-2a05-4d75-bcf7-235b2f8bf6e7.webp' style={{ width: '27rem', height: '20rem' }} />,
    <img src='https://www.healthkart.com/connect/wp-content/uploads/2021/02/Banner-36.jpg' style={{ width: '27rem', height: '20rem' }} />,
    <img src='https://cdn.mypowerlife.com/wp-content/uploads/2020/11/gym-equipment.jpg' style={{ width: '27rem', height: '20rem' }} />,
    <img src='https://cf.ltkcdn.net/fitness/gear-and-apparel/images/orig/303660-1600x1066-how-use-most-common-exercise-machines-gym.jpg' style={{ width: '27rem', height: '20rem' }} />,
    <img src='https://img.freepik.com/premium-photo/male-athlete-workout-running-exercise-machine-active-sport-training-gym_266732-208.jpg?w=2000' style={{ width: '27rem', height: '20rem' }} />
];

const Carousel = () => (
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

export default Carousel