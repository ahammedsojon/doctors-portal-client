import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const Appointments = ({ date }) => {
    const [appointments, setAppointments] = useState([]);
    const { user, token } = useAuth();
    // console.log(user)
    useEffect(() => {
        const url = `https://calm-beyond-76948.herokuapp.com/appointments?email=${user?.email}&date=${date.toLocaleDateString()}`;
        // console.log(url, user.email)
        axios.get(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res);
                setAppointments(res.data)
            })
    }, [user?.email, date])
    return (
        <Box>
            <Typography variant="h5">Appointments: {appointments.length}</Typography>
            {
                appointments.length === 0 ? <Box>< CircularProgress /></Box> :
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Patinet</TableCell>
                                    <TableCell align="right">Service</TableCell>
                                    <TableCell align="right">Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {appointments.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.patinetName}
                                        </TableCell>
                                        <TableCell align="right">{row.serviceName}</TableCell>
                                        <TableCell align="right">{row.time}</TableCell>
                                    </TableRow>
                                ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </Box >
    );
};

export default Appointments;