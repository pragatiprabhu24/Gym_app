import {React, useEffect }from 'react'
import '../css/home.css'
import CallIcon from '@mui/icons-material/Call';
import { Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Rating from '@mui/material/Rating';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel'
import Carousel1 from '../Components/Carousal1';
import Footer from '../Components/Footer';
import {motion} from 'framer-motion'
import AOS from 'aos'
const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',

}));


const Home = () => {
    useEffect(() => {
        AOS.init({duration: 1500})
    }, [])
    return (
        <>
            <div className='main'>
                <Navbar />


                <div className='banner'>
                    <div className='title'>
                        <Container>
                          <motion.div
                           initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.5, duration:'1.2'}}
                          >
                          <h4>ACEFIT FITNESS STUDIO</h4>
                            <motion.h1
                            animate={{fontSize: 50}}
                            >
                                Kolhapur’s First <br />Crossfit Functional <br />Studio
                            </motion.h1>
                            <h5>We offer everything you need to reach your fitness goals. Whether you're a <br /> beginner or a pro, we have something for everyone.</h5>
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" href="tel:8882192787" style={{ backgroundColor: '#F90716', borderRadius: '50px', fontWeight: 'bold' }}><CallIcon />call us now</Button>

                                <Button variant="contained" href="#contained-buttons" style={{ backgroundColor: '#F90716', borderRadius: '50%', fontWeight: 'bold' }}>
                                    <WhatsAppIcon />
                                </Button>
                            </Stack>
                          </motion.div>
                        </Container>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#1B1717' }}>
                <Container data-aos="zoom-in">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                            <Grid item xs={3}  >
                                <Item style={{ textAlign: 'start', padding: '10px 5%', backgroundColor: '#2C272E', borderRadius: '20px' }}><WorkspacePremiumIcon style={{ fontSize: '3rem', color: '#fe1943' }} />
                                    <h2 style={{ color: 'white', fontWeight: '900' }}>Highly Certified Fitness Trainers</h2>
                                    <h4 style={{ color: '#BBBBBB' }}>Expertly trained coaches lead dynamic, results-driven CrossFit classes for all fitness levels.</h4><br />
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item style={{ textAlign: 'start', padding: '10px 5%', backgroundColor: '#2C272E', borderRadius: '20px' }}><FitnessCenterIcon style={{ fontSize: '3rem', color: '#fe1943' }} />
                                    <h2 style={{ color: 'white', fontWeight: '900' }}>Top-notch Fitness Equipment</h2>
                                    <h4 style={{ color: '#BBBBBB' }}>Top-of-the-line equipment and functional training tools to push your fitness to the next level.</h4>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item style={{ textAlign: 'start', padding: '10px 5%', backgroundColor: '#2C272E', borderRadius: '20px' }}><SupervisorAccountIcon style={{ fontSize: '3rem', color: '#fe1943' }} />
                                    <h2 style={{ color: 'white', fontWeight: '900' }}>1-on-1 Personalized Training</h2>
                                    <h4 style={{ color: '#BBBBBB' }}>Customized workout plans tailored to your goals and abilities, with one-on-one coaching available.</h4>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item style={{ textAlign: 'start', padding: '10px 5%', backgroundColor: '#2C272E', borderRadius: '20px' }}><Diversity3Icon style={{ fontSize: '3rem', color: '#fe1943' }} />
                                    <h2 style={{ color: 'white', fontWeight: '900' }}>Guided Group Training Batches</h2>
                                    <h4 style={{ color: '#BBBBBB' }}>Small group classes for a supportive, motivational workout experience for all fitness levels.</h4>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

                <Container data-aos="zoom-in">
                    <Box sx={{ flexGrow: 1, marginTop: '4rem' }}>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                            <Grid item xs={6} style={{ textAlign: 'start', backgroundColor: '#1B1717' }} >
                               
                                    <h1 style={{ fontSize: '5rem', color: '#fe1943' }}>2500+</h1>
                                    <Rating name="size-large" defaultValue={5} size="large" />
                                    <h1 style={{ color: 'white' }}>Satisfied and Fit Members</h1>
                                    <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/before-after2.jpg' style={{ width: '25rem', height: '25rem' }} />
                               
                            </Grid>
                            <Grid item xs={6} style={{ backgroundColor: '#1B1717' }}>
                              
                                    <img src='https://acefitfitnessstudio.com/wp-content/uploads/2022/06/get-in-shape.jpg' style={{ width: '25rem', height: '25rem' }} />
                                    <h1 style={{ color: 'white' }}>Get in the Shape That You Always Wanted to See Yourself In</h1>
                                    <h4 style={{ color: '#BBBBBB' }}>Offering a distinct range of fitness options for everyone who wants to live a healthy and energetic lifestyle.</h4>
                          
                            </Grid>


                        </Grid>
                    </Box>
                </Container>


                <Container>
                    <Box sx={{ flexGrow: 1, marginTop: '4rem' }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                            <Grid item xs={6}  style={{ backgroundColor: '#1B1717' }}>
                              
                                    <img src='https://acefitfitnessstudio.com/wp-content/uploads/2022/06/about-acefit.jpg' style={{ width: '100%', height: '25rem' }} />
                             
                            </Grid>
                            <Grid item xs={6} style={{ backgroundColor: '#1B1717' }}>
                              
                                    <h3 style={{ color: 'white', textAlign: 'start' }}>ABOUT US</h3>
                                    <h1 style={{ color: 'white', textAlign: 'start', fontSize: '2rem' }}>A Team of Certified Fitness Trainers Dedicated to Your Overall Fitness</h1>
                                    <h4 style={{ color: '#BBBBBB', textAlign: 'start' }}>We understand that everyone’s fitness journey is unique, which is why we offer a variety of services to help you reach your goals. Our expertly trained coaches lead dynamic, results-driven CrossFit classes for all fitness levels.</h4>
                                    <Button variant="contained" style={{ backgroundColor: '#F90716', borderRadius: '50px', padding: '10px 5%', fontWeight: 'bold', marginTop: '2rem' }}>KNOW MORE</Button>
                              
                            </Grid>

                        </Grid>
                    </Box>
                </Container>


                <div style={{ marginTop: '4rem' }}>
                    <Carousel />
                </div>


                <Container data-aos="zoom-in">
                    <Box sx={{ flexGrow: 1, marginTop: '4rem' }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                            <Grid item xs={4}  style={{ backgroundColor: '#1B1717' }} >
                              
                                    <div>
                                        <h4 style={{ color: 'white' }}>FITNESS PROGRAMS</h4>
                                        <h1 style={{ color: 'white' }}>Training Programs Designed by Experts</h1>
                                        <h4 style={{ color: '#BBBBBB' }}>Providing a diverse selection of fitness options for individuals seeking to maintain a healthy lifestyle.</h4>
                                        <Button variant="contained" style={{ backgroundColor: '#F90716', borderRadius: '50px', padding: '10px 5%', fontWeight: 'bold', marginTop: '1rem' }}>KNOW MORE</Button>
                                    </div>
                             
                            </Grid>
                            <Grid item xs={4}>
                                <Item style={{ textAlign: 'start', padding: '10px 5%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                                    <h2 style={{ color: 'white', fontWeight: '900' }}>Crossfit Training</h2>
                                    <h4 style={{ color: '#BBBBBB' }}>High-intensity functional movement exercises to improve overall physical fitness and prepare the body for any physical challenge.</h4>
                                </Item>
                                <Item style={{ textAlign: 'start', padding: '10px 5%', backgroundColor: '#2C272E', borderRadius: '20px', marginTop: '1rem' }}>
                                    <h2 style={{ color: 'white', fontWeight: '900' }}>Yoga & Wellness</h2>
                                    <h4 style={{ color: '#BBBBBB' }}>High-intensity functional movement exercises to improve overall physical fitness and prepare the body for any physical challenge.With the ancient practice originated in India, our Yoga Gurus will help you attain inner peace and stability with various proven asanas.</h4>
                                </Item>
                                <Item style={{ textAlign: 'start', padding: '10px 5%', backgroundColor: '#2C272E', borderRadius: '20px', marginTop: '1rem' }}>
                                    <h2 style={{ color: 'white', fontWeight: '900' }}>Zumba</h2>
                                    <h4 style={{ color: '#BBBBBB' }}>A type of exercise program that combines elements of dance and aerobics, to give you an experience of fitness and fun together.</h4>
                                </Item>
                            </Grid>


                            <Grid item xs={4}>
                                <Item style={{ textAlign: 'start', padding: '10px 5%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                                    <h2 style={{ color: 'white', fontWeight: '900' }}>Sports Specific</h2>
                                    <h4 style={{ color: '#BBBBBB' }}>A program designed to improve your strength and endurance with athlete level training, to give you agility, strength and performance.</h4>
                                </Item>
                                <Item style={{ textAlign: 'start', padding: '10px 5%', backgroundColor: '#2C272E', borderRadius: '20px', marginTop: '1rem' }}>
                                    <h2 style={{ color: 'white', fontWeight: '900' }}>Diet & Nutrition</h2>
                                    <h4 style={{ color: '#BBBBBB' }}>A diet and nutrition plan exclusively designed as per your needs will help you achieve your fitness goals with a holistic approach.</h4>
                                </Item>
                                <Item style={{ textAlign: 'start', padding: '10px 5%', backgroundColor: '#2C272E', borderRadius: '20px', marginTop: '1rem' }}>
                                    <h2 style={{ color: 'white', fontWeight: '900' }}>Online Training</h2>
                                    <h4 style={{ color: '#BBBBBB' }}>Can not leave home? No worries! Online fitness training is a convenient and flexible way to get in shape and reach your fitness goals.</h4>
                                </Item>
                            </Grid>

                        </Grid>
                    </Box>
                </Container>

                <Container>
                    <center>
                        <div>
                            <h1 style={{ color: 'white' }}>Testimonials</h1>
                        </div>
                        <Box
                            className="box"
                            sx={{
                                height: '200px',
                                backgroundColor: '#2C272E',

                            }}>
                            <Container>
                                <Carousel1 />
                            </Container>


                        </Box>


                    </center>

                </Container>

                <Footer/>


                













            </div>



        </>
    )
}

export default Home
