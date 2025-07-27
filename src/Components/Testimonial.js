import React,{useEffect} from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonial = () => {

    const testimonials = [
  {
    quote: `When I first arrived at the centre, I was in a very difficult state—wandering the streets, poorly dressed, and struggling with severe behavioural challenges. With dedicated care and consistent treatment over five years, my condition has significantly improved. Today, I live with dignity, maintain my health with regular medication, and engage in normal social relationships. I have even entered into marriage. I am deeply grateful to the team for guiding me toward recovery and helping me rebuild my life.`,
    author: 'A rehabilitated individual, age ~35',
  },
  {
    quote: `When I was first admitted, I was in a highly disturbed state—without proper clothing and displaying severe behavioural issues, requiring constant supervision. Over the course of ten years, through the organisation’s patient care and rehabilitation efforts, my life has transformed. Today, I present myself well, communicate clearly, adhere to my treatment, and have rejoined society as a school teacher in a private institution. I sincerely thank the team for helping me regain stability, dignity, and purpose in life.`,
    author: 'A rehabilitated individual from Thiruvannamalai District, age 40',
  },
  {
    quote: `When I was admitted, I was in a very poor state—experiencing severe behavioural disturbances and unable to meet even basic needs. With seven years of dedicated psychiatric care and rehabilitation, my condition has remarkably improved. I now manage my health with regular medication, maintain proper appearance and communication, and have resumed my passion by working as an art teacher in a private school. I am deeply thankful to the organisation for helping me rediscover my purpose and rebuild my life.`,
    author: 'A rehabilitated individual from Chennai, age 50',
  },
  {
    quote:"Before coming to the centre, I was struggling with severe mental health issues—frequent inappropriate laughter and disorganised speech. My condition required long-term treatment and support. Over 15 years of consistent care, I have made significant progress. Today, I manage my health responsibly, dress appropriately, and communicate clearly. I have even taken the bold step of starting my own business. I am truly grateful to the team for helping me regain confidence and lead a productive life.",
    author:"A rehabilitated individual from Chennai, age 60"
  },
  {
    quote:"When I was first admitted, I was in a deeply disturbed mental state—experiencing disorganised thoughts, frequent outbursts, and delusional beliefs. With the help of sustained psychiatric treatment and compassionate care over eight years, my condition has improved significantly. I now maintain proper behaviour and appearance, communicate clearly, and adhere to my prescribed medication. I have also successfully rejoined the workforce in a senior role. I am sincerely thankful to the team for their unwavering support in helping me return to a stable and fulfilling life.",
    author:"A rehabilitated individual from Chennai, age 45"
  }
];
useEffect(() => {
  sessionStorage.setItem("PageTitle", 'Testimonial');
}, []);

  return (
    <div className="margin_Top">
  <Box className="testimonial-section">
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimony, index) => (
          <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }} key={index}>
            <Paper elevation={3} className="testimonial-card">
              <FormatQuoteIcon className="quote-icon" />
              <Typography variant="body1" className="quote-text">
                {testimony.quote}
              </Typography>
              <Typography variant="subtitle2" className="author-text" style={{fontWeight:"bold"}}>
                — {testimony.author}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  )
}

export default Testimonial