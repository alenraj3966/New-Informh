import React from 'react'
import '.././Style.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaSchool, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <Grid container spacing={3}>

                    
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                            <div className="footer-column">
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                                        <Typography variant="h6" component="h3">CONTACT US</Typography>
                                    </Grid>

                                    <Grid size={{ xs: 2, sm: 2, md: 1, lg: 1 }}>
                                        <FaMapMarkerAlt className="footer-icon" />
                                    </Grid>
                                    <Grid size={{ xs: 10, sm: 10, md: 11, lg: 11 }}>
                                        <Typography variant="body2">
                                            NO.41, MALLIGAI STREET, SRI RAJESHWARI NAGAR, VALLANCHERRY, GUDUVANCHERRY,
                                            KANCHEEPURAM DISTRICT, TAMIL NADU, SOUTH INDIA ZIP CODE - 603202
                                        </Typography>
                                    </Grid>

                                    <Grid size={{ xs: 2, sm: 2, md: 1, lg: 1 }}>
                                        <FaPhoneAlt className="footer-icon" />
                                    </Grid>
                                    <Grid size={{ xs: 10, sm: 10, md: 11, lg: 11 }}>
                                        <Grid container spacing={2}>
                                            <Grid size={{ xs: 2, sm: 2, md: 1, lg: 1 }}>
                                                <Typography variant="body2">
                                                    Office:
                                                </Typography>
                                            </Grid>
                                            <Grid size={{ xs: 8, sm: 8, md: 5, lg: 5 }}>
                                                <Typography variant="body2" align='left'>
                                                    +91-9962005040<br />
                                                    +91-9566030040 <br />
                                                    +91-9176182968
                                                </Typography>
                                            </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid size={{ xs: 2, sm: 2, md: 1, lg: 1 }}>
                                            <FaEnvelope className="footer-icon" />
                                        </Grid>
                                        <Grid size={{ xs: 10, sm: 10, md: 11, lg: 11 }}>
                                            <Typography variant="body2">
                                                jsonpaulraj@yahoo.co.in
                                            </Typography>
                                        </Grid>
                                    </Grid>
                            </div>
                        </Grid>
                        {/* Quick Links */}
                        <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3 }}>
                            <div className="footer-column">
                                <h3>QUICK LINKS</h3>
                                <ul>
                                    <li><Link  to="#">Home</Link></li>
                                    <li><Link  to="#">Who We Are</Link ></li>
                                    <li><Link  to="#">Our Services</Link ></li>
                                    <li><Link  to="#">Our Gallery</Link ></li>
                                    <li><Link  to="#">Contact</Link ></li>
                                    <li><Link  to="#">Donate</Link ></li>
                                </ul>
                            </div>
                        </Grid>


                        {/* Follow Us */}
                        <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3 }}>
                            <div className="footer-column">
                                <h3>FOLLOW US</h3>
                                <div className="social-icons">
                                    <Link  to="#"><FaFacebookF /></Link >
                                    <Link  to="#"><FaInstagram /></Link >
                                    <Link  to="#"><FaYoutube /></Link >
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <hr />
                <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                <div className="footer-bottom">
                    © 2025 INFORMH. All Right Reserved.
                </div>
                </Grid>
                 <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                <div className="footer-bottom-right">
                    Designed By <Link>AlmiTech</Link>
                </div>
                </Grid>
                </Grid>
            </footer>
        </div>
    )
}

export default Footer