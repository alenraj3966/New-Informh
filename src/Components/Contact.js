import React,{useEffect} from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {

  useEffect(() => {
  sessionStorage.setItem("PageTitle", 'Contact');
}, []);
  return (
    <div className="margin_Top">
         <div className="Content-section">
        <Grid container spacing={2}>
            <Grid size={12}>
                <h1>We'd Love to Hear from <span style={{color:'#1657F0'}}>You</span></h1>
                <Typography variant='body1'>Have questions or want to connect? Reach out to us anytime and</Typography>
                <Typography variant='body1'>we'll get back to you as soon as possible.</Typography>
            </Grid>
        </Grid>
        </div>
          <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#f7f9fc' }}>
      <Grid container spacing={4}>
        {/* Left Side - Contact Info */}
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5 }} sx={{ backgroundColor: '#1657F0', color: '#fff', borderRadius: 2, p: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            Feel free to reach out through any of these channels:
          </Typography>

          <Box display="flex" alignItems="center" mt={3}>
            <LocationOnIcon sx={{ mr: 2 }} />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">Location</Typography>
              <Typography variant="body2">
                NO.41, MALLIGAI STREET, SRI RAJESHWARI NAGAR, VALLANCHERRY, GUDUVANCHERRY,
                KANCHEEPURAM DISTRICT, TAMIL NADU, SOUTH INDIA ZIP CODE - 603202
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" mt={3}>
            <EmailIcon sx={{ mr: 2 }} />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">Email</Typography>
              <Typography variant="body2"> jsonpaulraj@yahoo.co.in</Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" mt={3}>
            <PhoneIcon sx={{ mr: 2 }} />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">Phone</Typography>
              <Typography variant="body2">+91 9962005040</Typography>
              <Typography variant="body2">+91 9566030040</Typography>
              <Typography variant="body2">+91 9176182968</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - Contact Form */}
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Send a Message
          </Typography>
          <Typography variant="body1" gutterBottom>
            We'll get back to you as soon as possible
          </Typography>

          <Grid container spacing={2} mt={2}>
            <Grid item size={6}>
              <TextField fullWidth label="Your Name" required />
            </Grid>
            <Grid item size={6}>
              <TextField fullWidth label="Email Address" type="email" required />
            </Grid>
            <Grid item size={12}>
              <TextField fullWidth label="Subject" placeholder="How can we help?" />
            </Grid>
            <Grid item size={12}>
              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={5}
                required
                placeholder="Write your message here..."
              />
            </Grid>
            <Grid item size={12}>
              <Button variant="contained" fullWidth endIcon={<SendIcon />} sx={{ backgroundColor: '#1657F0' }}>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Contact