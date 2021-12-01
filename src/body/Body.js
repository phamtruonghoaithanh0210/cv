import React from 'react'
import {Grid, Container, Box, useMediaQuery } from "@mui/material"
import { useTheme } from '@mui/styles';
import  Avatar from "./Avatar"
import Info from './Info'
import Experience from './Experience';
import Education from './Education';
import Activities from './Activities';
import ThreeGIFT from '../three/ThreeGIFT';



export default function Body() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
            {isMobile ? (
                <>
                    <ThreeGIFT/>
                    <Avatar/>
                    <Info />
                    <Education/>
                    <Experience/>
                    <Activities/>
                </>
            ) 
            : (
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
                                <Info />
                                <Education/>
                                <Experience/>
                                <Activities/>
                            </Box>
                        </Grid>
                </Grid>
            </Container>
            )
        }
        </>
    )
}