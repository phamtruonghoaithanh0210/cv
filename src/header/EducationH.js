import React from 'react'
import {Grid, Container, Box, useMediaQuery } from "@mui/material"
import  Avatar from "../body/Avatar"
import Education from '../body/Education';
import ThreeGIFT from '../three/ThreeGIFT';
import { useTheme } from '@mui/styles';


function EducationH() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
            {isMobile ? (
                <>
                <ThreeGIFT/>
                <Avatar/>
                <Education/>
                </>
            ) : (
        <Container>
        <ThreeGIFT/>
        <Grid container spacing={0.5}>
            <Grid item xs={6} md={4}>
                <Box mt={8}>
                    <Avatar/>
                </Box>
            </Grid>
            <Grid item xs={6} md={8}>
                <Box mt={2}>
                    <Education/>
                </Box>
            </Grid>
        </Grid>
    </Container>
    )}
    </>
    )
}

export default EducationH
