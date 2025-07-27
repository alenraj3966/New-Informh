
import React, { useState,useEffect } from 'react';
import '.././Style.css';
import { Grid, Box, Typography, Dialog, DialogTitle, Divider, DialogContent, Button, IconButton, Card, CardContent,Paper } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import CancelIcon from '@mui/icons-material/Cancel';

const OurService = () => {

  const [ShowView, setShowView] = useState(false);
  const [GetViewData, setGetViewData] = useState([]);

  useEffect(() => {
  sessionStorage.setItem("PageTitle", 'Our Service');
}, []);

  const imageData = [
    {
      title: "Schizophrenia and Other Psychotic Disorders", image: `${process.env.PUBLIC_URL}/assets/S1.jpeg`,
      para: "Schizophrenia and related psychotic disorders are serious mental health conditions that affect a person's thinking, emotions, and behavior. Individuals may experience symptoms such as hallucinations (seeing or hearing things that are not real), delusions (false beliefs), disorganized thinking, and a lack of motivation or emotional expression.",
      Desc: "Schizophrenia and related psychotic disorders are serious mental health conditions that affect a person's thinking, emotions, and behavior. Individuals may experience symptoms such as hallucinations (seeing or hearing things that are not real), delusions (false beliefs), disorganized thinking, and a lack of motivation or emotional expression. These conditions often interfere with daily functioning and relationships, but with consistent treatment, structured support, and compassionate care, many individuals can experience significant improvement.",
      Child: "Our facility provides a safe, therapeutic environment where residents receive psychiatric care, medication management, counseling, and rehabilitation to promote recovery and enhance quality of life."
    },
    {
      title: "Bipolar Affective Disorder", image: `${process.env.PUBLIC_URL}/assets/Bipolar.jpg`,
      para: "Bipolar Affective Disorder is a mental health condition marked by extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).",
      Desc: "Bipolar Affective Disorder is a mental health condition marked by extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). During manic phases, individuals may feel overly energetic, euphoric, or irritable, while depressive episodes can bring feelings of sadness, hopelessness, and fatigue. Without proper treatment, these shifts can impact daily life, work, relationships, and decision-making.",
      Child: "At our center, we provide personalized care that includes mood stabilization through medication, regular psychiatric monitoring, therapeutic interventions, and a supportive environment to help individuals lead balanced and fulfilling lives."
    },
    {
      title: "Chronic Depression", image: `${process.env.PUBLIC_URL}/assets/chonic.jpg`,
      para: "Chronic Depression, also known as Persistent Depressive Disorder (Dysthymia), is a long-term form of depression that lasts for years. Individuals may experience a continuous low mood, lack of interest in daily activities, low self-esteem, fatigue, and difficulty concentrating.",
      Desc: "Chronic Depression, also known as Persistent Depressive Disorder (Dysthymia), is a long-term form of depression that lasts for years. Individuals may experience a continuous low mood, lack of interest in daily activities, low self-esteem, fatigue, and difficulty concentrating. Though the symptoms may be less intense than major depression, their long-lasting nature can severely impact a person's quality of life.",
      Child: "Our facility offers compassionate care, regular psychiatric support, counseling, and structured daily activities to help manage symptoms and support emotional well-being."
    },
     {
      title: "Intellectual Disabilities (ID) with Psychiatric Symptoms", image: `${process.env.PUBLIC_URL}/assets/ID.jpg`,
      para: "ID involve limitations in intellectual functioning and adaptive behavior, affecting daily living skills, communication, and social interaction.",
      Desc: "ID involve limitations in intellectual functioning and adaptive behavior, affecting daily living skills, communication, and social interaction. When individuals with ID also experience psychiatric symptoms—such as anxiety, depression, mood swings, or psychosis—their challenges become more complex and require specialized care.",
      Child: "Our center provides integrated support for individuals with both intellectual disabilities and co-occurring mental health conditions. Services include psychiatric evaluation, behavior management, personalized therapeutic programs, and compassionate caregiving to promote stability, dignity, and improved quality of life."
    },
    {
      title: "Obsessive-Compulsive Disorder (OCD)", image: `${process.env.PUBLIC_URL}/assets/OCD.jpg`,
      para: "OCD is a mental health condition characterized by unwanted, recurring thoughts (obsessions) and repetitive behaviors or rituals (compulsions) that individuals feel driven to perform. ",
      Desc: "OCD is a mental health condition characterized by unwanted, recurring thoughts (obsessions) and repetitive behaviors or rituals (compulsions) that individuals feel driven to perform. These patterns can interfere with daily life, causing significant distress and anxiety. Common obsessions include fears of contamination or harm, while compulsions may involve excessive cleaning, checking, or counting.",
      Child: "At our center, individuals with OCD receive structured therapy, including behavioral interventions, psychiatric care, and emotional support to help manage symptoms and improve functioning."
    },
   
    {
      title: "Personality Disorders", image: `${process.env.PUBLIC_URL}/assets/PD.jpg`,
      para: "Personality Disorders are long-standing patterns of thoughts, feelings, and behaviors that deviate significantly from cultural expectations, causing difficulties in relationships, work, and daily functioning.",
      Desc: "Personality Disorders are long-standing patterns of thoughts, feelings, and behaviors that deviate significantly from cultural expectations, causing difficulties in relationships, work, and daily functioning. These patterns often begin in adolescence or early adulthood and can lead to distress or impairment over time. Common types include Borderline, Antisocial, Narcissistic, and Avoidant Personality Disorders, among others. Individuals may struggle with emotional regulation, interpersonal conflict, self-image, and impulse control.",
      Child: "Our center provides structured therapeutic interventions, psychiatric care, and supportive counseling tailored to the needs of individuals with personality disorders, helping them lead more stable, fulfilling lives."
    },
   
     {
      title: "Psychosocial Disabilities", image: `${process.env.PUBLIC_URL}/assets/PshyosocialDis.jpg`,
      para: "Psychosocial disabilities refer to the challenges faced by individuals with mental health conditions that impact their ability to participate fully in society.",
      Desc: "Psychosocial disabilities refer to the challenges faced by individuals with mental health conditions that impact their ability to participate fully in society. These disabilities may affect social interactions, employment, education, and daily living activities, often resulting from conditions like schizophrenia, bipolar disorder, depression, and anxiety.",
      Child: "At our center, we focus on holistic support that includes psychiatric care, counseling, skill development, and community integration programs. Our goal is to empower individuals with psychosocial disabilities to lead fulfilling, independent lives with dignity and respect."
    },
    {
      title: "Substance-Induced Psychosis", image: `${process.env.PUBLIC_URL}/assets/substance.jpg`,
      para: "Substance-Induced Psychosis occurs when the use of or withdrawal from drugs, alcohol, or certain medications triggers symptoms of psychosis, such as hallucinations, delusions, confusion, or disorganized thinking.",
      Desc: "Substance-Induced Psychosis occurs when the use of or withdrawal from drugs, alcohol, or certain medications triggers symptoms of psychosis, such as hallucinations, delusions, confusion, or disorganized thinking. These symptoms can be temporary or, in some cases, lead to longer-term psychiatric conditions if left untreated.",
      Child: "Our facility provides comprehensive care, including detoxification support, psychiatric stabilization, medication management, and counseling to help individuals recover safely and prevent recurrence. We also offer rehabilitation services and family support to promote long-term recovery and reintegration."

    },
      {
      title: "Age-related Psychiatric Conditions", image: `${process.env.PUBLIC_URL}/assets/age.jpg`,
      para: "As individuals age, they may experience unique mental health challenges related to physical decline, social isolation, cognitive changes, and chronic illnesses.",
      Desc: "As individuals age, they may experience unique mental health challenges related to physical decline, social isolation, cognitive changes, and chronic illnesses. Age-related psychiatric conditions commonly include dementia, Alzheimer’s disease, late-onset depression, anxiety, and delirium. These conditions can significantly affect memory, behavior, and emotional well-being, impacting both the individual and their caregivers.",
      Child: "Our center offers compassionate, specialized care for older adults through psychiatric assessment, cognitive therapies, medication management, and supportive environments tailored to promote dignity, comfort, and quality of life in later years."
    },
   
    {
      title: "Homeless or Abandoned Individuals", image: `${process.env.PUBLIC_URL}/assets/homeHelp.jpg`,
      para: "Individuals experiencing severe mental illness who are homeless or abandoned face profound challenges, including lack of shelter, access to healthcare, and social support.",
      Desc: "Individuals experiencing severe mental illness who are homeless or abandoned face profound challenges, including lack of shelter, access to healthcare, and social support. These vulnerable populations often suffer from untreated psychiatric conditions such as schizophrenia, bipolar disorder, or severe depression, which can exacerbate their isolation and health risks.",
      Child: "Our organization is committed to outreach, rescue, and rehabilitation services tailored to meet the complex needs of these individuals. We provide emergency shelter, psychiatric evaluation, medication, counseling, and ongoing care aimed at restoring dignity, stability, and hope."
    },
   

  ];

  const values = [
    {
      title: "Regular Health Examinations",
      description:
        "Periodic health assessments to monitor and maintain overall well-being",
      icon: `${process.env.PUBLIC_URL}/assets/healthcare1.png`, // Replace with actual image path
    },
    {
      title: "Psychiatric Counseling",
      description:
        "Expert psychiatric evaluation and counseling provided by renowned and experienced mental health professionals",
      icon: `${process.env.PUBLIC_URL}/assets/growth1.png`, // Replace with actual image path
    },
    {
      title: "Monthly Medical Checkups",
      description:
        "Monthly routine physical health checkups are conducted by an in-house physician to ensure ongoing medical care and monitoring",
      icon: `${process.env.PUBLIC_URL}/assets/diet1.png`, // Replace with actual image path
    },
    {
      title: "Holistic Care ​",
      description:
        "Compassionate and comprehensive treatment aimed at improving both physical and mental health, delivered in a nurturing and supportive environment.",
      icon: `${process.env.PUBLIC_URL}/assets/protest1.png`, // Replace with actual image path
    },
  ];

  const handleView = (item, index) => {
    setShowView(true);
    setGetViewData(item);
  };

  const handleClose = () => {
    setShowView(false);
  }

  return (
    <div className="margin_Top">

      <div className="Content-section">
        <div className="Content-title">Conditions Treated</div>
        <Box sx={{ width: '100%', padding: 4 }}>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
            {imageData.map((item, index) => (
              <div className="image-container" key={index}>
                <img src={item.image} alt={item.title} className="card-image" />

                <Box className="card-overlay">
                  <Typography variant="h6" className="card-title">{item.title}</Typography>
                </Box>

                <Box className="card-overlay-hover">
                  <Typography variant="h6" className="card-title">{item.title}</Typography>
                  <p className="card-desc">{item.para}</p>
                  <Button variant="contained" className="card-button" onClick={(e) => handleView(item, index)}>View</Button>
                </Box>
              </div>
            ))}
          </Masonry>
        </Box>
      </div>

      <div className="Content-section">
        <div className="Content-title">What We Do</div>
        <Grid container spacing={2}>
          <Grid size={12}>
            <h1>Comprehensive Healthcare Services</h1>
          </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#F5FCFF' }}>
          <Grid container spacing={2}>
            {values.map((feature, index) => (
              <Grid item key={index} size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
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


      <div className="Content-section">
        {/* <div className="Content-title">Our Founder "Karunaiyin Sigaram" C. Johnson Paulraj</div> */}
        <h1>Interpersonal Communication Skills Development</h1>
        <Grid container style={{ margin: "0px 20px" }}>
          <Grid item size={12}>
            {/* <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#F5FCFF', display: "flex" }}> */}

              <Grid container spacing={2} style={{ margin: "0px 10px", display: "flex" }}>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
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
                        <strong>Interpersonal Communication Skills Development</strong> to enhance social interaction and relationship-building abilities.
                      </p>

                      <p>

                        <strong>Speech Therapy</strong> tailored to improve language and communication challenges
                      </p>

                      <p>
                        <strong>Psychotherapy</strong> sessions to support emotional and psychological well-being
                      </p>

                      <p>
                        <strong>Physiotherapy </strong> for improving physical function and mobility
                      </p>
                      <p>
                        <strong>Vocational Training in Handicrafts, </strong> including candle making and other creative crafts, to encourage skill development and self-expression
                      </p>
                      <p>
                        <strong>Individualized Rehabilitation Programs </strong> based on each resident’s IQ level and mental health status, promoting personalized growth and independence
                      </p>
                    </Paper>
                  </Card>
                </Grid>
              </Grid>


            {/* </Box> */}
          </Grid>
        </Grid>
      </div>

        <div className="Content-section">
        {/* <div className="Content-title">Our Founder "Karunaiyin Sigaram" C. Johnson Paulraj</div> */}
        <h1>Nutrition and Wellness</h1>
        <Grid container style={{ margin: "0px 20px" }}>
          <Grid item size={12}>
            {/* <Box sx={{ backgroundColor: '#F5FCFF', display: "flex" }}> */}

              <Grid container spacing={2} style={{ margin: "0px 10px", display: "flex" }}>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
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
                        <strong>Balanced Nutrition:</strong> Residents are provided with well-balanced meals—breakfast, lunch, dinner, and snacks—prepared and served by trained health staff, ensuring both quality and adequate quantity to meet their dietary needs
                      </p>

                      <p>

                        <strong>Daily Meditation:</strong> Guided meditation sessions are conducted every day within our serene campus environment, promoting mental calmness, emotional balance, and overall well-being
                      </p>

                     
                      <p>
                        <strong>Dr. Rebecca Vanmuzil MBBS - Our in house surgeon</strong> 
                      </p>
                    </Paper>
                  </Card>
                </Grid>
              </Grid>
            {/* </Box> */}
          </Grid>
        </Grid>
      </div>



      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        onBackdropClick="false"
        open={ShowView}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          <Grid container spacing={3}>
            <Grid item size={11} >
              <div style={{ fontWeight: "bold", color: "black" }}> {GetViewData.title}</div>

            </Grid>
            <Grid item size={1} align-items-xs-center justify-xs-flex-end>
              <IconButton onClick={handleClose}>
                <CancelIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <div>
            <Typography variant='body1'>
              {GetViewData.Desc}
            </Typography><br />
            <Typography variant='body1'>
              {GetViewData.Child}
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default OurService