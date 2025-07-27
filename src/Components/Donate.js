import React, { useState,useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  MenuItem,
  TextField,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import '.././Style.css';
import dayjs from 'dayjs';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Donate = () => {
  const [giftType, setGiftType] = useState(0);
  const [amount, setAmount] = useState('1500');
  const [Otheramount, setOtherAmount] = useState('0');
  const [frequency, setFrequency] = useState('Monthly');
  const [nextPayment, setNextPayment] = useState(dayjs());

  const faqs = [
    {
      question: 'Why a Regular Gift?',
      answer:
        'Regular donations create a secure income, which means we can plan for the future and ensure that we create sustainable change. Without this, the work we do would not be possible.'
    },
    {
      question: 'How will you respect my privacy?',
      answer:
        'INFORMH takes your privacy seriously. We will use your personal information to process your donations and only in other ways which you would reasonably expect. We will never sell or trade your details.'
    },
    {
      question: 'How can I get in touch?',
      answer:(
    <>
      INFORMH is committed to achieving the best experience for our supporters. If you have any questions, concerns or comments, we would really appreciate hearing from you.
      <br />
      <br />
      NO.41, MALLIGAI STREET, SRI RAJESHWARI NAGAR, VALLANCHERRY, GUDUVANCHERRY,
    
      KANCHEEPURAM DISTRICT, TAMIL NADU, SOUTH INDIA ZIP CODE - 603202
    </>
      )
    }
  ];

  useEffect(() => {
  sessionStorage.setItem("PageTitle", 'Donate');
}, []);




  return (

    <div className="margin_Top">

      <Box className="donate-page">
        <Typography variant="h3" align="center" color="maroon" gutterBottom>
          Donate Now
        </Typography>
<Grid container spacing={2}>
  <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7 }}>

        <Paper className="donate-box" elevation={3}>
          <Tabs
            value={giftType}
            onChange={(e, newValue) => {
              debugger;
              setGiftType(newValue)
              if(newValue === 0){
                 setAmount('1500')
              }else{
                 setAmount('4500')
              }
            }}
            variant="fullWidth"
          >
            <Tab label="REGULAR GIFT" />
            <Tab label="SINGLE GIFT" />
          </Tabs>

          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom color="teal">
              Gift amount
            </Typography>

            <Grid container spacing={2} mb={3}>
              {giftType === 0 && (
                <>
                  <Grid item size={3}>
                    <Typography color="textSecondary">For one meal </Typography>
                    <ToggleButton
                      value={amount}
                      onClick={() => {
                        setAmount('1500')
                        setOtherAmount('0')
                      }}
                      className={amount === '1500' ? 'selected-btn' : 'Unselected-btn'}
                      fullWidth
                    >
                      ₹1500
                    </ToggleButton>
                  </Grid>
                  <Grid item size={3}>
                    <Typography color="textSecondary">Meals per day</Typography>
                    <ToggleButton
                      value={amount}
                      onClick={() => {setAmount('3000')
                        setOtherAmount('0')
                      }}
                      className={amount === '3000' ? 'selected-btn' : 'Unselected-btn'}
                      fullWidth
                    >
                      ₹3000
                    </ToggleButton>
                  </Grid>
                </>
              )}
              {giftType === 1 && (
                <Grid item size={3}>
                  <Typography color="textSecondary">One person per month </Typography>
                  <ToggleButton
                    value={amount}
                    onClick={() => {
                      setAmount('4500')
                      setOtherAmount('0')
                    }}
                    className={amount === '4500' ? 'selected-btn' : 'Unselected-btn'}
                    fullWidth
                  >
                    ₹4500
                  </ToggleButton>
                </Grid>
              )}

              <Grid item size={3} mt={3}>
                <ToggleButton
                  value={Otheramount}
                  onClick={() => {setOtherAmount('1')
                    setAmount('0')
                  }}
                  className={!['1500', '3000', '4500'].includes(amount) ? 'selected-btn' : 'Unselected-btn'}
                  fullWidth
                >
                  Other amount
                </ToggleButton>
              </Grid>
              {Otheramount !== '0' && (
                <Grid item size={12} mt={3}>
                  <TextField id="outlined-basic"
                    label="Enter Amount"
                    variant="outlined"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
                </Grid>
              )}
            </Grid>



            <Grid container spacing={2}>
              <Grid item size={6}>
                <TextField
                  fullWidth
                  select
                  label="Process my gift"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                >
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="Quarterly">Quarterly</MenuItem>
                  <MenuItem value="Yearly">Yearly</MenuItem>
                </TextField>
              </Grid>
              <Grid item size={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Next payment on"
                    value={nextPayment}
                    onChange={(newValue) => setNextPayment(newValue)}
                    format="MM/DD/YYYY"
                    slotProps={{
                      textField: {
                        fullWidth: true
                      }
                    }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>

            <Typography variant="body2" mt={2} fontStyle="italic">
              Use the format MM/DD/YYYY.
            </Typography>
            <Typography variant="body2" mt={1}>
              Your first gift processes today. The next gift processes on {nextPayment.format('M/D/YYYY')}.
            </Typography>
          </Box>
        </Paper>
        </Grid>
         <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5 }}>
 <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} className="faq-accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="faq-summary"
          >
            <Typography fontWeight="bold" >{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
         </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Donate