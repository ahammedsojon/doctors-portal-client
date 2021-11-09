import { Alert, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: '1',
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: 10
    },
    {
        id: '2',
        name: 'Cosmetic Densitry',
        time: '9:00 AM - 10:00 AM',
        space: 5
    },
    {
        id: '3',
        name: 'Teeth Cleaning',
        time: '11:00 AM - 12:30 PM',
        space: 7
    },
    {
        id: '4',
        name: 'Cavity Protection',
        time: '4:00 PM - 5:00 PM',
        space: 10
    },
    {
        id: '5',
        name: 'Pediatric Dental',
        time: '5:05 PM - 6:00 PM',
        space: 5
    },
    {
        id: '6',
        name: 'Oral Surgery',
        time: '6:00 PM - 7:00 PM',
        space: 7
    }
]

const AppointmentAvailables = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00cec9', mb: 3 }}>
                Appointment Availables {date.toDateString()}
            </Typography>
            {
                bookingSuccess && <Alert severity="success">Appointment Booking Successfully</Alert>
            }
            <Grid container spacing={4}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AppointmentAvailables;