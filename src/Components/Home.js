import React, { useEffect, useState } from 'react';
import '.././Style.css';
import { Card, CardContent, CardHeader, Typography, Paper, Box, Grid } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const history = useNavigate();
  const baseURL = process.env.PUBLIC_URL + "/assets/";

  const images = [
    baseURL + "Home1.jpg",
    baseURL +"Home2.jpg",
    baseURL +"Home3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
     sessionStorage.setItem("PageTitle", 'Home');

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <AccessibilityNewIcon sx={{ fontSize: 40, color: '#1E88E5' }} />,
      title: 'TO THE SOCIETY',
      description:
        'To actively organize and implement awareness campaigns and rallies aimed at reducing stigma surrounding mental health within the community. We are committed to supporting and advancing the objectives of the National Mental Health Programme, fostering greater understanding, acceptance, and inclusion for individuals affected by mental health conditions.',
      background: '#F1F6FD',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
      title: 'TO THE NEEDY',
      description:
        'To establish mobile care units providing essential mental health services, reaching underserved populations. We are dedicated to rescuing and supporting abandoned, homeless, and socially marginalized individuals living with mental health challenges, offering them compassionate care and hope for reintegration into society.',
      background: '#EDF9F0',
    },

  ];

  const handleDonate = () => {
    history('/Donate');
  }

  return (
    <div className='margin_Top'>
      <div className="carousel">
        <div className="overlay"></div>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`carousel-img ${index === currentIndex ? "active" : ""}`}
          />
        ))}
        <div className="carousel-content">
          <img src={`${process.env.PUBLIC_URL}/assets/LogoInformh.png`} alt='icons' className="carousel-logo" />
          <h1>Serving with Love and Compassion</h1>
          <p>
            INDIA FORUM FOR THE MENTAL HEALTH
          </p>
          <div className="carousel-buttons">
            <button className="donate-btn" onClick={handleDonate}>Donate Now</button>

          </div>
        </div>
      </div>



      <div className="Content-section">
        <div className="Content-title">Our Vision and Mission</div>
        {/* <div className="Content-card"> */}
         <Card sx={{
                    height: '100%',
                    borderRadius: 2,
                    boxShadow: 2,
                  }}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        pl: 4,
                        borderBottom: '6px solid #3c3cb5;',
                        borderRadius: 2,
                        backgroundColor: '#f9f9f9',
                      }}
                    >
          <h3>Vision Statement</h3>
          <Typography variant="body1" style={{ fontSize: "17px", color: "black" }}>
            To be a leading center of excellence in psychiatric rehabilitation, empowering individuals with mental illness
            to lead meaningful, independent, and dignified lives through compassionate care, innovation, and community integration.
          </Typography >
          <h3>Mission</h3>
          <Typography variant="body1" style={{ fontSize: "17px", color: "black" }}>
            Our mission is to provide holistic, person-centered psychiatric rehabilitation services that promote recovery,
            resilience, and reintegration. We strive to:
            <ul>
              <li style={{ marginBottom: "3px" }}>Deliver high-quality, evidence-based care in a safe and supportive environment.</li>
              <li style={{ marginBottom: "3px" }}>Foster empowerment through psychosocial interventions, skill development, and vocational training.</li>
              <li style={{ marginBottom: "3px" }}>Support families and caregivers through education and collaboration.</li>
              <li style={{ marginBottom: "3px" }}>Build awareness and reduce stigma in the community through outreach and advocacy.</li>
              <li style={{ marginBottom: "3px" }}>Continuously grow and innovate in service delivery to meet the evolving needs of our patients.</li>
            </ul>
          </Typography>
          </Paper>
          </Card>
        {/* </div> */}
      </div>



      <Grid container style={{ margin: "0px 20px" }}>
        <Grid item size={12}>
          <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#F5FCFF', display: "flex" }}>
            <Grid container spacing={2} style={{ margin: "0px 10px" }}>

              {features.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                  <Card sx={{
                    backgroundColor: feature.background,
                    height: '100%',
                    borderRadius: 2,
                    boxShadow: 2,
                  }}>
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>



    </div>
  )
}

export default Home