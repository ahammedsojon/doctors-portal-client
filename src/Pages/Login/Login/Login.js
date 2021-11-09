import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loading, authError, loginUser, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(field, value)
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
        e.target.reset();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacning={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    {
                        !loading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                onBlur={handleOnChange}
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                variant="standard"
                                type="email"
                                name="email" />

                            <TextField
                                onBlur={handleOnChange}
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                variant="standard"
                                type="password"
                                name="password" />
                            <Button type="submit" variant="contained" sx={{ width: '75%', m: 1 }} style={{ backgroundImage: 'linear-gradient(to right, rgba(85, 239, 196,1.0), rgba(0, 206, 201,1.0))' }}>Login</Button>
                        </form>

                    }
                    {
                        loading && <CircularProgress />
                    }
                    {
                        (user?.email && !authError) && <Alert severity="success">User login successfully.</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Button variant="text">New User? Please Login</Button>
                    </Link>
                    <p>----------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained" sx={{ width: '75%', m: 1 }}>Sign In With Google</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;