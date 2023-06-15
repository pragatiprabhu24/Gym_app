import React from 'react'
import { styled } from '@mui/material/styles';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Container } from '@mui/material'
import '../css/training.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Training = () => {

  return (
    <>
      <div className='main1'>
        <Navbar />
        <div className='banner'>
          <div className='title'>
            <Container>
              <h1>Training Programs</h1>
              <h5>Our state-of-the-art facility, expert trainers, and wide range of classes and <br /> services make us the go-to choice for people of all fitness levels.</h5>
            </Container>
          </div>
        </div>
      </div>


      <div style={{ backgroundColor: '#2D2727' }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
              <Grid item xs={6} >
                <h1 style={{ color: "white", fontSize: '3rem' }}>CrossFit Training</h1>
                <p style={{ color: "#cdc6c6" }}>AceFit Fitness Studio offers CrossFit Training, a high-intensity functional fitness program that is tailored to help clients achieve their goals with the guidance of certified coaches. It combines weightlifting and cardio to improve strength, endurance, and fitness through challenging workouts and proper nutrition.</p>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>What is CrossFit training?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      CrossFit is a high-intensity, functional fitness program that combines weightlifting, cardio, and other exercises to improve overall strength, endurance, and fitness.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>What are the benefits of CrossFit training?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      CrossFit training can help you improve your overall fitness and health, build muscle and strength, increase endurance, and lose weight. It can also help you improve your mental focus and reduce stress.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>Is CrossFit training for everyone?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      CrossFit is suitable for people of all fitness levels and can be scaled to accommodate injuries or other limitations. However, it is important to consult with a doctor before starting any new exercise program.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>How can AceFit help me with CrossFit training?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      AceFit Studio offers CrossFit training led by certified coaches who will help you achieve your fitness goals through a personalized program that combines weightlifting, cardio, and other exercises. The coaches will guide you through each movement and provide modifications as needed.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

              </Grid>
              <Grid item xs={6} >
                <img src='https://acefitfitnessstudio.com/wp-content/uploads/2022/07/crossfit.jpg' style={{ width: '100%', height: '90%' }} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>


      <div style={{ backgroundColor: '#1B1A17' }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={6}>
                <img src='https://acefitfitnessstudio.com/wp-content/uploads/2022/07/yoga-wellness.jpg' style={{ width: '100%', height: '90%' }} />
              </Grid>
              <Grid item xs={6}>
                <h1 style={{ color: "white", fontSize: '3rem' }}>Yoga & Wellness</h1>
                <p style={{ color: "#cdc6c6" }}>AceFit Fitness Studio offers a variety of yoga classes for all levels, led by experienced instructors, to improve flexibility, strength, balance, and physical & mental health. Along with this, the studio also provides a personalized approach and other wellness services such as meditation, nutrition coaching, stress management techniques and more, to aid clients in reaching their fitness and wellness goals.</p>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>What are the benefits of practicing Yoga?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Practicing yoga can improve flexibility, strength, balance, and overall physical and mental health. It can also help reduce stress, improve breathing and increase mindfulness.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>Is Yoga suitable for all levels of fitness?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, yoga is suitable for people of all fitness levels and can be modified to accommodate injuries or other limitations.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>How can AceFit help me with yoga?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      At AceFit Studio, certified instructors lead a range of yoga sessions catering to individuals of all abilities. These classes aim to enhance flexibility, muscle tone, equilibrium and overall well-being, both physically and mentally.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>Does AceFit provide any other wellness services?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      At AceFit Studio, clients can take advantage of a wide range of services beyond yoga classes, such as meditation, nutritional guidance, and stress management techniques.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>

          </Box>
        </Container>
      </div>
      <div style={{ backgroundColor: '#2D2727' }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
              <Grid item xs={6} >
                <h1 style={{ color: "white", fontSize: '3rem' }}>Sports Specific</h1>
                <p style={{ color: "#cdc6c6" }}>AceFit Fitness Studio’s Sports Specific program is a training program that improves strength, endurance, and performance. The program includes sports-specific assessments, injury prevention and recovery techniques.</p>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>What is AceFit Fitness Studio's Sports Specific program?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The Sports Specific program at AceFit Fitness Studio is a training plan designed to enhance strength and stamina with athlete level training.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>Who is the program designed for?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The program is designed for all skill levels and ages who want to improve their strength, stamina and performance.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>How does the program help with injury prevention?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The program includes injury prevention techniques, such as proper warm-up and cool-down routines, and exercises to improve flexibility and stability. By addressing any imbalances or weaknesses, the program aims to reduce the risk of injury.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>How does AceFit help clients with their Sports Specific program?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      At AceFit Fitness Studio, clients can expect to receive expert guidance from certified and seasoned trainers who specialize in creating training programs to improve strength and endurance.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

              </Grid>
              <Grid item xs={6} >
                <img src='https://acefitfitnessstudio.com/wp-content/uploads/2022/07/sport-specific.jpg' style={{ width: '100%', height: '90%' }} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>

      <div style={{ backgroundColor: '#1B1A17' }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={6}>
                <img src='https://acefitfitnessstudio.com/wp-content/uploads/2023/01/zumba.jpg' style={{ width: '100%', height: '90%' }} />
              </Grid>
              <Grid item xs={6}>
                <h1 style={{ color: "white", fontSize: '3rem' }}>Zumba</h1>
                <p style={{ color: "#cdc6c6" }}>Get moving and burn calories with AceFit Studio’s Zumba classes. Led by certified instructors, our Zumba classes combine bollywood and international music with easy-to-follow dance moves for a fun and energetic workout. Perfect for all fitness levels, Zumba at AceFit Studio is a great way to improve cardiovascular fitness, tone the body and boost energy levels.</p>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography >What is Zumba?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    It is a high-energy, cardio-based workout that incorporates elements of dance and music. The choreography is designed to be fun and easy to follow, making it accessible to people of all fitness levels and ages.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>Are there any age restrictions for Zumba classes?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    No, there are no age restriction.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      backgroundColor: "#282A3A"
                    }}
                  >
                    <Typography style={{ color: 'white' }}>What are the benefits of taking a Zumba class at AceFit Studio?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Zumba classes at AceFit Studio can help improve cardiovascular fitness, tone the body, and boost energy levels. The high-energy, cardio-based movements can help you burn calories, while the dance-inspired choreography can help you work on your coordination and balance. Additionally, the upbeat music and fun atmosphere can help you stay motivated and enjoy your workout.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
               
              </Grid>
            </Grid>

          </Box>
        </Container>

        <Footer/>
      </div>
      




    </>
  )
}

export default Training
