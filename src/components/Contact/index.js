import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { LocationOn, Call, ArrowOutward } from '@mui/icons-material';

const ContactSection = () => {
  return (
    <Grid container spacing={4} className="p-5">
      <Grid item xs={12} sm={12}>
        <Box className="text-right flex flex-col justify-end">
          <div className="uppercase align-middle flex float-right">8903 Glades Road Suite A8 <br/>Boca Raton, FL 33434 <LocationOn/></div>
          <a href="tel:561-922-0500">561-922-0500 <Call /></a>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} className="flex justify-center">
        <Box>
          <img
            src="images/contact.png"
            alt="Contact"
            style={{ cursor: 'pointer' }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} className="flex justify-left">
        <div>
        <h1 className="md:text-[7rem] text-3xl lg:leading-[8rem] sm:leading-[5rem] leading-normal uppercase text-left md:max-w-[70%] max-w-[100%] font-medium flex items-center">
            CONNECT <ArrowOutward className="md:text-[9rem] text-[#5700ef] contact-arrow"/>
        </h1>
        <h1 className="md:text-[7rem] text-3xl lg:leading-[8rem] sm:leading-[5rem] leading-normal uppercase text-left font-medium flex items-center">
           WITH US NOW
        </h1>
        </div>
      </Grid>
    </Grid>
  );
};

export default ContactSection;