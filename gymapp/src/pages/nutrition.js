import React from 'react'
import Navbar from '../Components/Navbar'
import { Container } from '@mui/material'
import '../css/nutrition.css'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Carousel2 from '../Components/Carousal2';
import Footer from '../Components/Footer';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const nutrition = () => {

    return (
        <>
            <div className='main2'>
                <Navbar />
                <div className='banner'>
                    <div className='title'>
                        <Container>
                            <h1>Diet and Nutrition</h1>
                            <h5>Our team of certified nutritionists are dedicated to helping you create a personalized <br />nutrition plan to support your training and optimize your results.</h5>
                        </Container>
                    </div>
                </div>
                <div style={{ backgroundColor: '#282A3A' }}>
                    <Container>
                        <h1 style={{ color: 'white', }}>Why Diet and Nutrition is important?</h1>

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                                <Grid item xs={4}  >
                                    <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                                        <h1 style={{ color: 'red' }}>01</h1>
                                        <h3 style={{ color: 'white', fontWeight: '900' }}>Provides Nutrients</h3>
                                        <h4 style={{ color: '#BBBBBB' }}>Balanced diet provides all necessary vitamins, minerals & macronutrients that the body needs to function properly.</h4><br />
                                    </Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                                        <h1 style={{ color: 'red' }}>02</h1>
                                        <h3 style={{ color: 'white', fontWeight: '900' }}>Maintain Healthy Weight</h3>
                                        <h4 style={{ color: '#BBBBBB' }}>A diet in balance with energy needs and and low in calorie dense foods can help with weight management.</h4>
                                    </Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                                        <h1 style={{ color: 'red' }}>03</h1>
                                        <h3 style={{ color: 'white', fontWeight: '900' }}>Promotes Good Health</h3>
                                        <h4 style={{ color: '#BBBBBB' }}>Eating a diet rich in fruits, vegetables, whole grains, and lean protein can help reduce the risk of chronic diseases.</h4>
                                    </Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                                        <h1 style={{ color: 'red' }}>04</h1>
                                        <h3 style={{ color: 'white', fontWeight: '900' }}>Improves Mental Wellness</h3>
                                        <h4 style={{ color: '#BBBBBB' }}>Eating healthy diet also improves mood, energy levels, and cognitive function supporting overall well-being.</h4>
                                    </Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                                        <h1 style={{ color: 'red' }}>05</h1>
                                        <h3 style={{ color: 'white', fontWeight: '900' }}>Support Physical Fitness</h3>
                                        <h4 style={{ color: '#BBBBBB' }}>Proper nutrition is crucial for optimal physical performance and recovery in athletes and active individuals.</h4>
                                    </Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                                        <h1 style={{ color: 'red' }}>06</h1>
                                        <h3 style={{ color: 'white', fontWeight: '900' }}>Supports Immune System</h3>
                                        <h4 style={{ color: '#BBBBBB' }}>Eating a well-balanced diet with a variety of nutrient-dense foods can help to support the immune system.</h4>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>


                    </Container>
                    <div style={{ marginTop: '6rem', backgroundColor: '#2C272E' }}>
                        <Container>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    <Grid item xs={6} >
                                        <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/nutrition-food.jpg' style={{ width: '100%', height: '100%' }} />

                                    </Grid>
                                    <Grid item xs={6} >
                                        <h1 style={{ color: 'white', fontSize: '3rem' }}>Meet the Nutritionist</h1>
                                        <p style={{ color: '#BBBBBB' }}>We are dedicated to helping you create a personalized nutrition plan to support your training and optimize your results.</p>
                                        <Grid container spacing={2} columns={6} sx={{ marginTop: '4rem' }}>
                                            <Grid item xs={3}>
                                                <img src="https://acefitfitnessstudio.com/wp-content/uploads/2023/01/manasi-dalvi.jpg" style={{ width: '100%', height: '100%' }} />
                                            </Grid>
                                            <Grid item xs={3}>
                                                <h1 style={{ color: 'white' }}>Mansi Dalvi</h1>
                                                <p style={{ color: '#BBBBBB' }}>Nutritionist/Food Technologist
                                                    M.Sc. Nutrition and Dietetics
                                                    B.Sc. Food Technology & Management</p>
                                                <Grid container spacing={0.5} columns={3} >
                                                    <Grid item xs={1.5}>
                                                        <h1 style={{ fontSize: '2rem', color: 'red' }}>29</h1>
                                                    </Grid>
                                                    <Grid item xs={1.5}>
                                                        <h4 style={{ color: 'white' }}>Clients Handled Currently</h4>

                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                        <Container>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={6}>
                                        <h1 style={{ color: 'white' }}>Amazing Results</h1>
                                        <Carousel2 />
                                    </Grid>
                                    <Grid item xs={6} style={{textAlign:'center'}}>
                                        <h1 style={{ color: 'white' }}>Some More!</h1>
                                        <ul style={{ listStyleType: 'none', color: '#BBBBBB' }}>
                                            <li>Pranav Sawant 2.3kg loss in 28 days</li>
                                            <li>Sukumar Dawar 2kg loss in 12 days</li>
                                            <li>Sneha Kambale 13kg loss</li>
                                            <li>Ganesh Chougule 10 kg gain</li>
                                        </ul>

                                        <h1 style={{color:'white',marginTop:'3rem'}}>Inspired?<br/>
                                            Call Us Today!</h1>
                                            <h1 style={{color:'red'}}>+91 91563 98191</h1>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Container>
                    </div>
                    <Footer/>
                   
                </div>
            
            </div>
          


        </>
    )
}

export default nutrition
