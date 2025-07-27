import React, { useState } from 'react';
import '.././Style.css';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Button, Divider, Avatar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';


const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const history = useNavigate();

  const [showMenu, setshowMenu] = useState(false);

  const handleDonate = () => {
    history("/Donate");
  };

  const handleMenu = () => {
    setshowMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUrl = (url) => {
    history(url);
    setAnchorEl(null);
  }

  return (
    <div className='Top-Navbar'>
      <Grid container className="topbar">
        <Grid size={{ xs: 6, sm: 6, md: 9, lg: 9 }}>
          <div className="left">
            <span style={{ fontWeight: "bold" }}>INFORMH PUBLIC CHARITABLE TRUST</span>
          </div>
        </Grid>
        <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3 }}>
          <div className="right">
            <span>Regd. No. 150/1999   Licence No. 189/2015</span>
          </div>
        </Grid>
      </Grid>
      {/* main */}
      <Grid container className="navbar">
        <Grid size={{ xs: 6, sm: 6, md: 4, lg: 4 }}>
          <div className="logo">
            <a href="/">
              <img src={`${process.env.PUBLIC_URL}/assets/Logo2.png`} alt="Logo" />
            </a>
          </div>
        </Grid>
        {isMobile ? (
          <>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon style={{ color: "black", fontSize: "30px" }} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              
              <MenuItem onClick={(e) => handleUrl("/")}>Home</MenuItem>
              <MenuItem onClick={(e) => handleUrl("/AboutUs")}>About Us</MenuItem>
              <MenuItem onClick={(e) => handleUrl("/OurService")}>Our Services</MenuItem>
              <MenuItem onClick={(e) => handleUrl("/Contact")}>Contact</MenuItem>
              <MenuItem onClick={(e) => handleUrl("/Testimonial")}>Testimonial</MenuItem>
              <MenuItem onClick={(e) => handleUrl("/Donate")}>Donate Now</MenuItem>
             
             
            </Menu>
          </>
        ) : (
          <>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/AboutUs">About Us</a>
              <a href="/OurService">Our Services</a>
              {/* <a href="/Gallery">Our Gallery</a> */}
              <a href="/Contact">Contact</a>
              <a href="/Testimonial">Testimonial</a>
            </div>
            <div className="donate-btn">
              <button onClick={handleDonate}>Donate Now »</button>
            </div>
          </>
        )}
      </Grid>


    </div>


  )
}

export default Navbar