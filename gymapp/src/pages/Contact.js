import React from 'react'
import Navbar from '../Components/Navbar'
import { Container, Button } from '@mui/material'
import '../css/contact.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../Components/Footer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';

const Contact = () => {
    return (
        <>
            <div className='main5'>
                <Navbar />
                <div className='banner'>
                    <div className='title'>
                        <Container>
                            <h1>Get in Touch</h1>
                            <h5>Contact us for more information on memberships, and personal training. <br /> Our team is ready to help you reach your fitness goals.</h5>
                        </Container>
                    </div>
                </div>
                <div style={{ backgroundColor: '#282A3A' }}>
                    <Container>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                <Grid item xs={6}>
                                    <div>
                                        <h1>It's time to get fit and live a healthy life!</h1>
                                        <p>
                                            If you have any questions about our memberships, class schedules, personal training options or any other aspect of our gym, please don’t hesitate to contact us.
                                        </p>
                                        <h3>Address</h3>
                                        <p>R.S NO. 201/D/3, Plot no 9 & 10 Chitranagri road, Gokul Shirgaon, Maharashtra 416234</p>
                                        <h3><WhatsAppIcon sx={{ color: 'red' }} /> +91 8787654565</h3>
                                        <h3><InstagramIcon sx={{ color: 'red' }} /> acefitfitnessstudio</h3>

                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                              
                                    <Box component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1 },
                                            backgroundColor: '#fff',
                                            padding: '50px'
                                        }}
                                        noValidate
                                        autoComplete="off">

                                        <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                                        <TextField id="outlined-basic" label="Mobile Number" variant="outlined" fullWidth />
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Message"
                                            multiline
                                            rows={4}
                                            fullWidth
                                        />
                                        <Button variant="contained" sx={{backgroundColor:'red', padding:'10px', float:'right'}}>Submit</Button>
                                    </Box>

                                </Grid>

                            </Grid>
                        </Box>
                    </Container>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Contact