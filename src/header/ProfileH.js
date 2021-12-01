import React from 'react'
import {Grid, Container, Box, useMediaQuery } from "@mui/material"
import  Avatar from "../body/Avatar"
import Info from '../body/Info';
import ThreeGIFT from '../three/ThreeGIFT';
import { useTheme } from '@mui/styles';


function ProfileH() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
            {isMobile ? (
                <>
                    <ThreeGIFT/>
                    <Avatar/>
                    <Info/>
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
                    <Info/>
                </Box>
            </Grid>
        </Grid>
    </Container>
    )}
    </>
    )
}

export default ProfileH
