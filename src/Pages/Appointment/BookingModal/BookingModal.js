import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth'
import { useState } from 'react';
import axios from 'axios';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ handleModalClose, modalOpen, booking, date, setBookingSuccess }) => {
    const { user } = useAuth();
    const { name, time, price } = booking;
    const initialInfo = { serviceName: name, patinetName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBooking = { ...bookingInfo };
        newBooking[field] = value;
        setBookingInfo(newBooking);
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        const appointment = {
            ...bookingInfo,
            price,
            time,
            date: date.toLocaleDateString()
        }
        axios.post('https://calm-beyond-76948.herokuapp.com/appointments', appointment)
            .then(res => {
                if (res.data.insertedId) {
                    setBookingSuccess(true);
                    handleModalClose();
                }
            })
    }
    return (
        <Modal
            keepMounted
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    <TextField disabled id="outlined-basic" label={time} variant="outlined" sx={{ width: '90%', m: 1 }} />
                    <TextField
                        onBlur={handleOnBlur}
                        id="outlined-required"
                        required
                        label="Your Name"
                        name="patinetName"
                        defaultValue={user.displayName}
                        variant="outlined" sx={{ width: '90%', m: 1 }} />
                    <TextField
                        onBlur={handleOnBlur}
                        id="outlined-required"
                        required
                        label="Your Email"
                        name="email"
                        defaultValue={user.email}
                        variant="outlined"
                        sx={{ width: '90%', m: 1 }} />
                    <TextField
                        onBlur={handleOnBlur}
                        type="number"
                        name="phone"
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        sx={{ width: '90%', m: 1 }} />
                    <TextField disabled id="outlined-basic" label={date.toDateString()} variant="outlined" sx={{ width: '90%', m: 1 }} />
                    <Button type="submit" variant="contained" sx={{ m: 1 }} style={{ backgroundImage: 'linear-gradient(to right, rgba(85, 239, 196,1.0), rgba(0, 206, 201,1.0))' }}>Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;