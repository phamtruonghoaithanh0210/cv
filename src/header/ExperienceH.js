import React from 'react'
import {Grid, Container, Box, useMediaQuery } from "@mui/material"
import  Avatar from "../body/Avatar"
import Experience from '../body/Experience';
import ThreeGIFT from '../three/ThreeGIFT';
import { useTheme } from '@mui/styles';


function ExperienceH() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
            {isMobile ? (
                <>
                    <ThreeGIFT/>
                    <Avatar/>
                    <Experience/>
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
                    <Experience/>
                </Box>
            </Grid>
        </Grid>
    </Container>
    )}
    </>
    )
}

export default ExperienceH
