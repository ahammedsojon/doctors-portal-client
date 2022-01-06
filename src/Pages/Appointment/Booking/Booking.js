import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space, price } = booking;
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 3 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#00cec9' }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACE AVIALABLE
                    </Typography>
                    <Button onClick={handleModalOpen} variant="contained" style={{ backgroundImage: 'linear-gradient(to right, rgba(85, 239, 196,1.0), rgba(0, 206, 201,1.0))' }}>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal setBookingSuccess={setBookingSuccess} booking={booking} date={date} modalOpen={modalOpen} handleModalClose={handleModalClose} ></BookingModal>
        </>
    );
};

export default Booking;