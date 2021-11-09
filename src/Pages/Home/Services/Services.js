import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio recusandae sapiente fugiat ex distinctio, eligendi, cum quae similique sint cumque esse facere quos blanditiis pariatur nostrum sed explicabo ducimus quis nemo quisquam iste dolores.',
        img: fluoride
    }, {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio recusandae sapiente fugiat ex distinctio, eligendi, cum quae similique sint cumque esse facere quos blanditiis pariatur nostrum sed explicabo ducimus quis nemo quisquam iste dolores.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio recusandae sapiente fugiat ex distinctio, eligendi, cum quae similique sint cumque esse facere quos blanditiis pariatur nostrum sed explicabo ducimus quis nemo quisquam iste dolores.',
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ mb: 1.5 }} variant="h6" color="success.main">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ mb: 1.5, fontWeight: 600 }} variant="h4" color="">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map((service, index) => <Service key={index} service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;