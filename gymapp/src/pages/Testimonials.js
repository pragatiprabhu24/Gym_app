import React from 'react'
import Navbar from '../Components/Navbar'
import { Container } from '@mui/material'
import '../css/testimonial.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Footer from '../Components/Footer';

const Testimonials = () => {
    return (
      <>
          <div className='main4'>
            <Navbar />
            <div className='banner'>
                <div className='title'>
                    <Container>
                        <h1>Testimonials</h1>
                        <h5>Real success stories and experiences from our community, from weight loss <br /> and strength gains to improved overall health and well-being.</h5>
                    </Container>
                </div>
            </div>
            <div style={{ backgroundColor: '#282A3A' }}>
               <Container>
               <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                        <Grid item xs={6}>
                            <img src='https://mayersonjcc.org/wp-content/uploads/2022/02/small-group-trainer-634x646.jpg' style={{width:'500px'}}/>
                        </Grid>
                        <Grid item xs={6}>
                           <FormatQuoteIcon sx={{
                            color:'#fff',
                            fontSize:'3rem',
                            backgroundColor:'red',
                            borderRadius:'50%',
                            padding:'10px'
                           }}/>
                           <h1>From 80Kg to 60Kg in 6 months! I will always be grateful!</h1>
                           <p>I joined AceFit at 80kg and had health issues, but with consistent training and proper nutrition guidance from my trainer, I lost 20kg, improved my health markers, and gained energy and confidence. I've never looked back and am now the fittest version of myself.</p>
                        </Grid>
                        <Grid item xs={6}>
                        <FormatQuoteIcon sx={{
                            color:'#fff',
                            fontSize:'3rem',
                            backgroundColor:'red',
                            borderRadius:'50%',
                            padding:'10px'
                           }}/>
                           <h1>From 80Kg to 60Kg in 6 months! I will always be grateful!</h1>
                           <p>I joined AceFit at 80kg and had health issues, but with consistent training and proper nutrition guidance from my trainer, I lost 20kg, improved my health markers, and gained energy and confidence. I've never looked back and am now the fittest version of myself.</p>
                        </Grid>
                        <Grid item xs={6}>
                        <img src='https://mayersonjcc.org/wp-content/uploads/2022/02/small-group-trainer-634x646.jpg' style={{width:'500px'}}/>
                        </Grid>
                    </Grid>
                </Box>
               </Container>
               <Footer/>
            </div>
        </div>
        
      </>
    )
}

export default Testimonials