import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../css/about.css'
import Carousel3 from '../Components/Carousal3';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const About = () => {
  return (
    <>
      <div className='main3'>
        <Navbar />
        <div className='banner'>
          <div className='title'>
            <Container>
              <h1>About Us</h1>
              <h5>Our top-notch facility, highly qualified trainers, & diverse class options make us the <br /> premier choice for individuals of all fitness abilities.</h5>
            </Container>
          </div>
        </div>
        <div style={{ backgroundColor: '#282A3A' }}>
          <Container>
            <h2 style={{ color: 'white', }}>AceFit Fitness offers a variety of fitness options, including high-intensity workouts, sports-specific training, yoga, cardio, and more, with an emphasis on mental wellbeing and nutrition. Our programs are scalable for all fitness levels, and our state-of-the-art facilities, coaches, and experts make us stand out.</h2>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                <Grid item xs={6}  >
                  <h4 style={{ color: '#BBBBBB' }}>We are a community of fitness enthusiasts who are passionate about helping people reach their full potential through high-intensity, functional training. Our experienced coaches lead group workouts that are challenging, fun, and suitable for people of all fitness levels.</h4>
                </Grid>
                <Grid item xs={6}>
                  <h4 style={{ color: '#BBBBBB' }}>Our gym is equipped with top-of-the-line equipment, including Olympic weightlifting bars, bumper plates, rowers, assault bikes, & more. We also have a variety of training tools such as kettlebells, dumbbells, and medicine balls to help you reach your goals.</h4>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ flexGrow: 1, marginTop: '4rem' }}>
              <h1 style={{ color: 'white' }}>Why Choose Us?</h1>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                <Grid item xs={4}  >
                  <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                    <h3 style={{ color: 'white', fontWeight: '900' }}>Crossfit Evolution</h3>
                    <h4 style={{ color: '#BBBBBB' }}>At AceFit Fitness we provide a unique environment of CrossFit workouts which has never been at the forefront to date. As we step into evolving this concept in Kolhapur we do keep helping you achieve your fitness goals.</h4><br />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                    <h3 style={{ color: 'white', fontWeight: '900' }}>Acceptance Zonet</h3>
                    <h4 style={{ color: '#BBBBBB' }}>AceFit Fitness is a judgement-free zone where every person can feel accepted and respected while working towards their fitness goals. We create an inclusive environment where clients can be comfortable and feel positive.</h4>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                    <h3 style={{ color: 'white', fontWeight: '900' }}>Well-Versed & Experienced Staff</h3>
                    <h4 style={{ color: '#BBBBBB' }}>AceFit Fitness team is passionate about fitness and wellness, and committed to helping clients lead a healthy active lifestyle. We are here to support clients every step of the way on their fitness journey.</h4>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                    <h3 style={{ color: 'white', fontWeight: '900' }}>Clean, Sanitized, Spacious Facility</h3>
                    <h4 style={{ color: '#BBBBBB' }}>We take great care in maintaining a clean, hygienic, and safe environment in our facility, We also provide equipment that are thoroughly cleaned and sanitized to ensure the health and safety of our clients.</h4>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                    <h3 style={{ color: 'white', fontWeight: '900' }}>Results Driven Approach</h3>
                    <h4 style={{ color: '#BBBBBB' }}>Our plans are tailored to individual needs and goals. We ensure that our clients are given the best possible outcome. We are committed to helping our clients achieve their fitness goals with a personalized experience.</h4>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item style={{ textAlign: 'start', padding: '20px 10%', backgroundColor: '#2C272E', borderRadius: '20px' }}>
                    <h3 style={{ color: 'white', fontWeight: '900' }}>Value for Money</h3>
                    <h4 style={{ color: '#BBBBBB' }}>Training with us at AceFit Fitness provides invaluable value beyond the monetary cost. It includes not only the time spent with us, but also the motivation, sustainable results, and new goals that come with it.</h4>
                  </Item>
                </Grid>
              </Grid>
            </Box>
            <div>
              <Box sx={{ flexGrow: 1, marginTop: '4rem' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                  <Grid item xs={6}  >
                    <h1 style={{ color: 'white' }}>Our Mission</h1>
                    <h4 style={{ color: '#BBBBBB' }}>AceFit’s mission is to provide an extraordinary atmosphere to enhance the lifestyle of people through a fitness journey that promotes lifelong wellness.</h4>
                  </Grid>
                  <Grid item xs={6}>
                    <h1 style={{ color: 'white' }}>Our Vision</h1>
                    <h4 style={{ color: '#BBBBBB' }}>To always be regarded as a unique, top-notch premier provider of quality fitness, good mental health and wellness experience in Kolhapur.</h4>
                  </Grid>
                </Grid>
              </Box>
            </div>

          </Container>
          <div style={{ backgroundColor: '#2C272E', marginTop: '4rem', marginBottom: '2rem' }}>
            <center>
              <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/exigo-equipement.png' style={{ marginTop: '2rem' }} />
              <h1 style={{ color: 'white' }}>Exigo-UK Crossfit Modular Functional Rig</h1>
            </center>
            <Carousel3 style={{ paddingBottom: '2rem' }} />

            <center>
              <h1 style={{ color: 'white' }}>Acefit Fitness Studio is First Studio in Maharashtra to <br /> install Exigo-UK Functional Rig</h1>
              <p style={{ color: '#BBBBBB', fontSize: '1.2rem' }}>This rig features adjustable pull-up bars, monkey bars, dip stations, and more, providing a <br /> comprehensive full-body workout. Acefit Fitness Studio is proud to be the first studio in <br />Maharashtra to have this rig available for their clients.</p>
            </center><br /><br />


          </div>
          <Container>
            <div style={{ marginTop: '4rem' }}>
              <center><h1 style={{ color: 'white' }}>A closer look at the gym</h1>
                <Box style={{ backgroundColor: '#2C272E', marginTop: '4rem', borderRadius: '30px' }}>
                  <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                      <Grid item xs={3}  >
                        <h4 style={{ color: 'white' }}>STARTED IN</h4>
                        <h1 style={{ color: '#F90716', fontSize: '3rem', fontWeight: '800' }}>2020</h1>
                      </Grid>
                      <Grid item xs={3}>
                        <h4 style={{ color: 'white' }}>SQ FT AREA</h4>
                        <h1 style={{ color: '#F90716', fontSize: '3rem', fontWeight: '800' }}>2000</h1>

                      </Grid>
                      <Grid item xs={3}>
                        <h4 style={{ color: 'white' }}>EQUIPMENTS</h4>
                        <h1 style={{ color: '#F90716', fontSize: '3rem', fontWeight: '800' }}>50+</h1>

                      </Grid>
                      <Grid item xs={3}>
                        <h4 style={{ color: 'white' }}>GYM STAFF</h4>
                        <h1 style={{ color: '#F90716', fontSize: '3rem', fontWeight: '800' }}>11</h1>
                      </Grid>

                    </Grid>
                  </Container>
                </Box>
                <h3 style={{ color: 'white', marginTop: '2rem' }}>Equipped with the Best Brands</h3>
                <Container>
                  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>
                    <Grid item xs={4}  >
                      <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/precore-equipement.png' style={{ width: '150px' }} />
                    </Grid>
                    <Grid item xs={4}>
                      <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/jordan-equipement.png' style={{ width: '150px' }} />
                    </Grid>
                    <Grid item xs={4}>
                      <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/exigo-equipement.png' style={{ width: '150px' }} />
                    </Grid>

                  </Grid>
                </Container>
              </center>

            </div>
          </Container>
          <Container>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={6}>
                  <img src='https://cdn4.sharechat.com/riyazaly_dcb1e31_1613283945767_sc_cmprsd_40.jpg' style={{ width: '400px', height: '450px' }} />
                  <h1 style={{ color: 'white' }}>Mr. Riyaz Aly (Founder)</h1>
                  <p style={{ color: '#BBBBBB' }}>A Heartly gratitude and warm wishes to all my Kolhapurkar My “Karveer Nivasini Shri Mahalakshmi” bestow her blessings with good health and prosperity in the coming year 2021 With the blessings of Lord Ganesha and Shree mahalakshmi and with the support of the well-wishers like you, we are pleased to announce the start up of our new fitness oriented center named ‘ACEFIT FITNESS STUDIO’ just next to Chitranagari, Gokulshirgaon. The year of 2020 went through a flight due to the COVID-19 pandamic while facing financial, physical and mental ups and downs. But the beginning of 2021has brought a hope to bring a positive change in our lives While facing all the roller-coaster ride of 2020, we have understood the importance of ‘physical health’ and a ‘Healthy Lifestyle’ Indeed, “Health is True Wealth” is now genuinely realised by all us. In the current era of competition and cat race, we unconditionally give last priority to our health and fitness. But not to worry ‘ACEFIT FITNESS STUDIO’ has come up to boost your mental and physical health with new techniques like cross functional training, sports specific training etc. We provide with other exciting features like 1) Precor/ Jordan/Exigo etc international companies gym equipments 2)Well trained qualified gym professionals 3) Eco-friendly environment 4) Well maintained safety, hygene and security facility. 5)specious parking arrangement And many more to come. The only moto of our fitness center is to help our clients to balance their physical and mental health in their busy work schedule. Helping our so clients to lead a satisfactory and healthy life is our ultimate aim We hope for your continued and generous support and encouragement in the days to come With lot of gratitude.</p>
                </Grid>
                <Grid item xs={6}>
                  <img src='https://tiktokcelebrities.com/wp-content/uploads/2019/12/Avneet-Kaur-3.jpg.webp' style={{ width: '300px', height: '350px' }} />
                  <h1 style={{ color: 'white' }}>Mrs. Avneet Kaur (Co-Founder)</h1>
                  <p style={{ color: '#BBBBBB' }}>I must say every individual entering Acefit Fitness studio will leave the studio with mental satisfaction and big fit smile on the face. I hope all the Kolhapurkar's will love the idea of new era of fitness studio and support us with open heart and blessings.</p>

                  {/* <img src='https://www.uniquenewsonline.com/wp-content/uploads/2022/10/jannatzubair29_278578642_1133252677495627_3572600752236278790_n.jpg' style={{width:'100%', height:'50%'}}/>
            
               <h3 style={{position:'absolute',bottom:'0px', left:'16px'}}>Chief Executive </h3> <br/>
               <h1>Mrs. Pallavi Mali</h1>  */}
                  <div style={{position:'relative'}}>
                    <img src="https://www.uniquenewsonline.com/wp-content/uploads/2022/10/jannatzubair29_278578642_1133252677495627_3572600752236278790_n.jpg" className='imge' style={{width:'100%', height:'50%',display:'block'}}/>
                      <h3 style={{position:'absolute',bottom:'5rem', left:'16px', color:'white'}}>Chief Executive</h3>
                      <h1 style={{position:'absolute',bottom:'1rem', left:'16px', color:'white'}}>Jannat Zubair</h1>
                     
                  </div>


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

export default About
