import React,{useEffect} from 'react';
import '.././Style.css';
import { Card, CardContent, CardHeader, Typography, IconButton, Box, Paper, Chip } from '@mui/material';
// import founderImage from '../../public/assets/Founder.jpg';
import Grid from '@mui/material/Grid';

const AboutUs = () => {

  const values = [
    {
      title: "Compassion",
      description:
        "We treat every individual with empathy, kindness, and dignity, recognizing the unique challenges they face.",
      icon: `${process.env.PUBLIC_URL}/assets/Collborsation1.png`, // Replace with actual image path
    },
    {
      title: "Respect",
      description:
        "We honor the rights, choices, and individuality of each person, fostering a culture of inclusion and acceptance.",
      icon: `${process.env.PUBLIC_URL}/assets/Respect1.png`,
    },
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty, transparency, and ethical care in all that we do.",
      icon: `${process.env.PUBLIC_URL}/assets/Integrity1.png`,
    },
    {
      title: "Generosity",
      description:
        "We serve with open hearts offering time, resources, and care without expecting anything in return.",
      icon: `${process.env.PUBLIC_URL}/assets/Genoeosity1.png`,
    },
    {
      title: "Holistic Approach",
      description:
        "We believe in addressing mental, emotional, physical, and social well-being for comprehensive healing and growth.",
      icon: `${process.env.PUBLIC_URL}/assets/Wholistic1.png`,
    },
    {
      title: "Empowerment",
      description:
        "We strive to equip individuals with the skills, confidence, and support they need to lead fulfilling lives.",
      icon: `${process.env.PUBLIC_URL}/assets/Empower1.png`,
    },
    {
      title: "Transformation",
      description:
        "We believe in the power of healing and change, guiding individuals on their journey toward renewed purpose and self-worth.",
      icon: `${process.env.PUBLIC_URL}/assets/Transformation1.png`,
    },
    {
      title: "Excellence",
      description:
        "We continuously seek to improve our services through best practices, professional development, and innovative approaches.",
      icon: `${process.env.PUBLIC_URL}/assets/Excellence1.png`,
    },
     {
      title: "Collaboration",
      description:
        "We work closely with families, communities, and healthcare professionals to ensure integrated and effective support.",
      icon: `${process.env.PUBLIC_URL}/assets/Collborsation1.png`,
    },
     {
      title: "Hope",
      description:
        "We foster a positive, uplifting environment where hope leads the way to recovery and a better future.",
      icon: `${process.env.PUBLIC_URL}/assets/Hope1.png`,
    },
  ];

  useEffect(() => {
  sessionStorage.setItem("PageTitle", 'About Us');
}, []);

  return (
    <div className='margin_Top'>

      <div className="Content-section">
        <div className="Content-title">About INFORMH</div>
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
          <p>
            The <strong>India Forum for Mental Health (INFORMH)</strong> was founded by{" "}
            <strong>Mr. C. Johnson Paulraj</strong>, our visionary Founder-President, along with a
            dedicated committee of five trust members. The journey began in a modest rented home in{" "}
            <strong>Mahalakshmi Nagar, Guduvanchery</strong>, and was officially inaugurated on{" "}
            <strong>April 4, 1994</strong>, by the then District Collector of Kanchipuram,
            <strong> Honourable Shri Varaprasad Yadav</strong>.
          </p>

          <p>
            Just four months later, INFORMH relocated to a second rented facility at{" "}
            <strong>EVP Avenue, GST Road, Vallanchery</strong>, where it continued to grow and serve
            for the next five years. A major milestone was achieved on <strong>January 31, 1999</strong>, when the organization moved to its permanent home at{" "}
            <strong>Sri Rajeshwari Nagar, Vallanchery</strong>. The land, measuring{" "}
            <strong>9,600 square feet</strong>, was generously donated by the local villagers — a
            testament to the community’s support and belief in INFORMH’s mission. The initial shelter,
            built with an asbestos roof, marked a humble yet hopeful beginning.
          </p>

          <p>
            In celebration of INFORMH’s <strong>15th anniversary</strong>,{" "}
            <strong>Dr. T. R. Pachamuthu</strong>, Chancellor of <strong>SRM University</strong>,
            extended invaluable support by sponsoring the construction of a fully equipped two-story
            concrete facility. The new building includes separate residential wings for men and
            women, each with attached bathrooms, significantly enhancing the quality of care and
            dignity provided to the residents.
          </p>

          <p>
            Today, INFORMH is home to <strong>40 individuals with mental health challenges</strong>,
            who receive <strong>compassionate care, appropriate psychiatric treatment, nutritious meals,
              clothing, and safe shelter</strong> in a nurturing environment.
          </p>
          </Paper>
          </Card>
        {/* </div> */}
      </div>

      <div className="Content-section">
        <div className="Content-title">Our Founder "Karunaiyin Sigaram" C. Johnson Paulraj</div>
        <Grid container style={{ margin: "0px 20px" }}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box sx={{ flexGrow: 1, backgroundColor: '#F5FCFF', display: "flex" }}>

              <Grid container spacing={2} style={{ margin: "0px 10px", display: "flex" }}>
                <Grid  size={{ xs: 12, sm: 12, md: 5, lg: 5 }}>
                  <Box
                    component="img"
                    src={`${process.env.PUBLIC_URL}/assets/Founder.jpg`}
                    alt="Founder"
                    sx={{
                      width: '100%',
                      height: '100%',
                      maxHeight: 550,
                      objectFit: 'cover',
                      borderRadius: 2,
                      boxShadow: 4,
                    }}
                  />
                </Grid>
                <Grid  size={{ xs: 12, sm: 12, md: 7, lg: 7 }}>
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
                      <Typography gutterBottom>
                        <strong>Mr. C. Johnson Paulraj</strong>, was born on <strong>June 26, 1965</strong>, in <strong>Purasawalkam, Chennai</strong>, to <strong>Mr. Charles Selvaraj</strong> (Retired PWD) and <strong>Mrs. Daisy Margret</strong> (Retired Headmistress, Chennai Corporation).
                      </Typography>
                      <Typography gutterBottom>
                        He completed his schooling at <strong>Raja Muthiah School</strong>, Mandaveli, and went on to earn a <strong>Diploma in Printing Technology</strong> from <strong>SIGA Polytechnic</strong>, Chetpet.
                      </Typography>
                      <Typography gutterBottom>
                        His journey of service began in <strong>1987</strong> as a mentor to visually challenged individuals through the <strong>Christian Foundation for the Blind in India (CFBI)</strong>. Guided by a deep spiritual calling, he established his own ministry in <strong>1994</strong>, founding the <strong>India Forum for Mental Health (INFORMH)</strong> with the mission to care for the destitute and mentally challenged.
                      </Typography>
                      <Typography gutterBottom>
                        He was honored with the title <strong>"Karunaiyin Sigaram" (The Peak of Compassion)</strong> by the <strong>Lions Club</strong> in recognition of his dedicated service, during <strong>INFORMH’s 15th anniversary celebration.</strong>
                      </Typography>
                      <Typography>
                        With unwavering dedication, Mr. Johnson Paulraj has been a tireless advocate for the marginalized and continues to champion their cause—uplifting lives with compassion, dignity, and purpose for over three decades.
                      </Typography>
                    </Paper>
                  </Card>
                </Grid>
              </Grid>


            </Box>
          </Grid>
        </Grid>
      </div>

 <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
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
        {/* </div> */}
        </Paper>
        </Card>
      </div>
</Grid>
</Grid>

      <Grid container style={{ margin: "10px" }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <div className="Content-section">
        <div className="Content-title">Our Values</div>
          <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#F5FCFF' }}>
            <Grid container spacing={2}>
              {values.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                  <Card
                    sx={{
                      backgroundColor: feature.background || '#fff',
                      height: '100%',
                      borderRadius: 2,
                      boxShadow: 2,
                    }}
                  >
                    <CardContent>
                      <img src={feature.icon} alt={feature.title} className="value-icon" />
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
          </div>
        </Grid>
      </Grid>






    </div>
  )
}

export default AboutUs