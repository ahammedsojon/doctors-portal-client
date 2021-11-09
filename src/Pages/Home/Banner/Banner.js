import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography, Button } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';


const bannerBg = {
    background: `url(${bg}) no-repeat `,
    backgroundSize: 'cover',
    height: 450
}
const verticalAlign = {
    display: 'flex',
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Container style={{ ...bannerBg, ...verticalAlign }} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{}}>
                <Grid item sx={{ textAlign: 'left' }} xs={12} md={5}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Your News Smile <br />
                        Starts Here
                    </Typography>
                    <Typography variant="h4" sx={{ fontSize: 14, color: 'gray', fontWeight: 300, my: 3, width: '75%', lineHeight: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto quaerat voluptatem atque quas ad, corrupti quasi rem beatae culpa.
                    </Typography>
                    <Button variant="contained" style={{ backgroundImage: 'linear-gradient(to right, rgba(85, 239, 196,1.0), rgba(0, 206, 201,1.0))' }}>GET APPOINTMENT</Button>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img style={{ width: 500 }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;