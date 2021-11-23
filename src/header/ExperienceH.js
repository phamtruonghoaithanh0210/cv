import React from 'react'
import {Grid, Container, Box, SpeedDialIcon, SpeedDialAction,SpeedDial, useMediaQuery } from "@mui/material"
import  Avatar from "../body/Avatar"
import Experience from '../body/Experience';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import ThreeGIFT from '../three/ThreeGIFT';
import { useTheme } from '@mui/styles';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

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
                    <SpeedDial
                        style={{position:"fixed"}}
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon />}
                    >
                        {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                        ))}
                    </SpeedDial>
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
                    <SpeedDial
                        style={{position:"fixed"}}
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon />}
                    >
                        {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                        ))}
                    </SpeedDial>
                </Box>
            </Grid>
        </Grid>
    </Container>
    )}
    </>
    )
}

export default ExperienceH
