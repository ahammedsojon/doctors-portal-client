import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmnetBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(25, 42, 86,0.8)',
    backgroundPosition: 'center center',
    backgroundBlendMode: 'darken, luminosity',
    backgroundSize: 'cover',
    marginTop: 110
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmnetBanner} sx={{ flexGrow: 1, boxShadow: 0, mb: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img style={{ maxWidth: '100%', height: 'auto', marginTop: -140, position: 'relative', top: 4 }} src={doctor} alt="" />
                </Grid>

                <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', py: 3 }}>
                    <Box>
                        <Typography variant="h6" color="success.main" sx={{ my: 2, fontStyle: 'italic', color: '#00cec9' }}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 600, lineHeight: 1.5 }}>
                            Make An Appointment <br /> Today
                        </Typography>
                        <Typography sx={{ fontSize: 15, color: 'white', my: 3, lineHeight: 2 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo tenetur inventore at blanditiis quisquam atque magnam ipsam sapiente accusamus?
                        </Typography>
                        <Button variant="contained" style={{ backgroundImage: 'linear-gradient(to right, rgba(85, 239, 196,1.0), rgba(0, 206, 201,1.0))' }}>Learn More</Button>
                    </Box>
                </Grid >
            </Grid >
        </Box >
    );
};

export default AppointmentBanner;