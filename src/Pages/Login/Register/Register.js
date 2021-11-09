import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser, user, authError, loading } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Password did not match');
            return;
        }
        registerUser(loginData.name, loginData.email, loginData.password, history);
        e.target.reset();
    }
    return (
        <Container>
            <Grid container spacning={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {
                        !loading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                variant="standard"
                                name="name" />

                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                variant="standard"
                                type="email"
                                name="email" />

                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                variant="standard"
                                type="password"
                                name="password" />
                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                variant="standard"
                                type="password"
                                name="password2" />

                            <Button type="submit" variant="contained" sx={{ width: '75%', m: 1 }} style={{ backgroundImage: 'linear-gradient(to right, rgba(85, 239, 196,1.0), rgba(0, 206, 201,1.0))' }}>Register</Button>
                        </form>
                    }
                    {
                        loading && <CircularProgress />
                    }
                    {
                        (user?.email && !authError) && <Alert severity="success">User created successfully.</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button variant="text">Already Registerd? Please Login</Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;