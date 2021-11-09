import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';
import bg from '../../../images/bg.png';

const appointmentHeaderBg = {
    background: `url(${bg}) no-repeat `,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: 450,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 50
}

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container style={appointmentHeaderBg}>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                <Grid item xs={12} md={6}>
                    <Typography variat="h3" sx={{ fontWeight: 'bold' }}>Appointment</Typography>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 500 }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;
