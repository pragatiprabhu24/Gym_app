import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Typography } from '@mui/material';

const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 1
    },
    1024: {
        items: 1,
        itemsFit: 'contain'
    },
};

const items = [
    <>
        <div>
        <h2 style={{color: 'white', textAlign:'start',fontWeight:'200'}}>I am really very happy with the transformation in my body and confidence.</h2>
        <ListItem>
        <ListItemAvatar>
          <Avatar src='https://cdn2.sharechat.com/beautifulbarbiedoll_2bb64bff_1595876628396_cmprsd_40.jpg'>
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
                     primary={<Typography  style={{ color: 'white', fontWeight:'600' }}>Monalisa</Typography>}
                     secondary={<Typography  style={{ color: '#AEC2B6' }}>United State</Typography>} />
        
      </ListItem>
        </div>


    </>,
    <>
        <h2 style={{color: 'white', textAlign:'start',fontWeight:'200'}}>I gained energy and confidence. I've never looked back and am now the fittest version of myself.</h2>,
        <ListItem>
        <ListItemAvatar>
          <Avatar src='https://i.pinimg.com/474x/f0/be/7e/f0be7e11a53aa10162c4f6d14250e10e.jpg'>
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
                     primary={<Typography  style={{ color: 'white', fontWeight:'600' }}>Sizuka</Typography>}
                     secondary={<Typography  style={{ color: '#AEC2B6' }}>Egypt</Typography>} />
        
      </ListItem>
    </>,

    <>
        <h2 style={{color: 'white', textAlign:'start',fontWeight:'200'}}>Trainers created a personalized workout plan that helped me improve my overall health.</h2>
        <ListItem>
        <ListItemAvatar>
          <Avatar src='https://i.pinimg.com/originals/a1/11/c9/a111c942e948928631d63eca830ea8da.png'>
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
                     primary={<Typography  style={{ color: 'white', fontWeight:'600' }}>Liza</Typography>}
                     secondary={<Typography  style={{ color: '#AEC2B6' }}>France</Typography>} />
        
      </ListItem>
    </>
];

const Carousel1 = () => (
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

export default Carousel1