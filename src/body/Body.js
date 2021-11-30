import React from 'react'
import {Grid, Container, Box, SpeedDialIcon, SpeedDialAction,SpeedDial, useMediaQuery } from "@mui/material"
import { useTheme } from '@mui/styles';
import  Avatar from "./Avatar"
import Info from './Info'
import Experience from './Experience';
import Education from './Education';
import Activities from './Activities';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import ThreeGIFT from '../three/ThreeGIFT';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];


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
                    <SpeedDial
                        style={{position:"fixed"}}
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: 16, right: 16}}
                        icon={<SpeedDialIcon />}
                    >
                        {actions.map((action) => (
                        <SpeedDialAction
                            sx={{backgroundColor:"#ffecb3"}}
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                        ))}
                    </SpeedDial>
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
                                <SpeedDial
                                    style={{position:"fixed"}}
                                    ariaLabel="SpeedDial basic example"
                                    sx={{ position: 'absolute', bottom: 20, right: 16}}
                                    icon={<SpeedDialIcon />}
                                >
                                    {actions.map((action) => (
                                    <SpeedDialAction
                                        sx={{backgroundColor:"#ffecb3" }}
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
            )
        }
        </>
    )
}
// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));