import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import { Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../css/home.css'
import { NavLink } from 'react-router-dom';

import CallIcon from '@mui/icons-material/Call';
 const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: '#1B1717' }}>
            <div className='banner1' style={{ marginTop: '4rem' }}>
                <div className='banner1-text'>
                    <h5 style={{ color: '#AEC2B6', fontWeight: '500' }}>FUEL THE BODY AND GET FIT</h5>
                    <h1 style={{ color: 'white', fontWeight: '1000' }}>Start Your Journey to <br /> Better Health Today!</h1>
                    <p style={{ color: '#AEC2B6', fontWeight: '600', }}>Make a commitment to improve your fitness and overall health by taking proper workout and nutrition training with Acefit. Your body and mind will thank you!</p>
                    <Button variant="contained" style={{ backgroundColor: '#F90716', borderRadius: '50px', padding: '10px 5%', fontWeight: 'bold' }}><CallIcon />call us now</Button>
                </div>

            </div>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <center><img src='https://acefitfitnessstudio.com/wp-content/uploads/2022/06/acefit-logo.svg' /></center>
                        </Grid>
                        <Grid item xs={8}>
                            <center>
                                <div class="nav-links">
                                <NavLink
                        to="/"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/training"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        Training
                    </NavLink>
                    <NavLink
                        to="/nutrition"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        Nutrition
                    </NavLink>
                    <NavLink
                        to="/about"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/testimonials"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        Testimonials
                    </NavLink>
                    <NavLink
                        to="/contact"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        Contact Us
                    </NavLink>
                                </div>
                            </center>
                        </Grid>
                        <Grid item xs>
                            <center>
                                <div className='icons'>
                                    <a href="//github.io/jo_geek" target="_blank"><FacebookIcon sx={{ color: '#537FE7' }} /></a>
                                    <a href="http://stackoverflow.com/users/4084003/" target="_blank"><InstagramIcon sx={{ color: '#EB455F' }} /></a>
                                    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank"><WhatsAppIcon sx={{ color: '#54B435' }} /></a>
                                </div>
                            </center>
                        </Grid>
                    </Grid>
                </Box>

                <Divider sx={{ bgcolor: "secondary.light", marginTop: '2rem' }} />

                <Box sx={{ flexGrow: 1, marginTop: '2rem' }}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={8} sx={{ color: 'white', textAlign: 'center' }}>
                            <h4>Copyright 2023 © ACEFIT | Fitness Studio, Kolhapur</h4>
                        </Grid>
                        <Grid item xs={8} sx={{ color: 'white', textAlign: 'center' }}>
                            <h4>Powered by Elem-X | Design by NativeDigital</h4>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            </div>
        </>
    )
}

export default Footer;
