import React from 'react'
import { Grid, Box, Typography, Card, Paper } from "@mui/material";

const Gallery = () => {

  const data = [
  { title: "STROKE", image: "../../../assets/S1.jpeg" },
  { title: "SPINAL CORD INJURY", image: "../../../assets/S1.jpeg" },
  { title: "GBS TREATMENT", image: "../../../assets/S1.jpeg" },
  { title: "PARKINSON'S DISEASE", image: "../../../assets/S1.jpeg" },
  { title: "BRAIN INJURY", image: "../../../assets/S1.jpeg" },
];

  return (
    <div className='margin_Top'>
         <Box sx={{ p: 4 }}>

      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className="image-card">
              <img src={item.image} alt={item.title} className="card-image" />
              <Box className="card-overlay">
                <Typography variant="h6" className="card-title">
                  {item.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  )
}

export default Gallery