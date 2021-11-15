import React from 'react'
import {Grid, Paper, Container, Box } from "@mui/material"
import { styled } from '@mui/styles';
import  Avatar from "./Avatar"
import Info from './Info'
import Experience from './Experience';
import Education from './Education';
import Activities from './Activities';

export default function Body() {
    return (
    <Container>
        
        <Grid container spacing={0.5}>
            <Grid item xs={6} md={4}>
                <Box mt={8}>
                    <Avatar/>
                </Box>
            </Grid>
            <Grid item xs={6} md={8}>
                <Box mt={2}>
                    <Info />
                    <Experience/>
                    <Education/>
                    <Activities/>
                </Box>
            </Grid>
        </Grid>

    </Container>
    )
}
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));