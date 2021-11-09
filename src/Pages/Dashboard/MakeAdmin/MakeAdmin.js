import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

function MakeAdmin() {
    const [email, setEmail] = useState('');
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const userEmail = { email };
        axios.put('https://calm-beyond-76948.herokuapp.com/users/admin', userEmail, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount) {
                    alert('Made Admin Successfully');
                    e.target.reset();
                }
            })
    }
    return (
        <Box>
            <Typography variant="h4">Make an Admin</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{ width: '50%', mb: 1 }} type="email" label="Eamil" variant="standard" onBlur={handleOnBlur} />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </Box>
    );
};

export default MakeAdmin;