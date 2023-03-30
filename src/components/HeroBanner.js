import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from "react-scroll";
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '112px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
  
                 <Link
              className="link"
              activeClass="active"
              to="exercises"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
              style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px',cursor: 'pointer'}}
             
            >
             Explore Exercises
            </Link>
     
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" height="20px" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;