import React from 'react'
import {Box, Typography, Grid, Stack} from '@mui/material'
import dataCV from "../data/cv.json"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PoolIcon from '@mui/icons-material/Pool';
import BookIcon from '@mui/icons-material/Book';
import { red } from '@mui/material/colors';
import {makeStyles} from "@mui/styles"

export default function Info() {
    const hobies = dataCV["hobbies"]
    const data= dataCV["summary"]
    const listSummary = data.map((idx)=><li>{idx}</li>)
    const email = dataCV["info"]["email"] 
    const name = dataCV["info"]["name"]
    const dob = dataCV["info"]["dayOfBirth"]
    const mainLanguage = dataCV["info"]["mainLanguage"]
    const secondLanguage = dataCV["info"]["secondLanguage"]
    const location = dataCV["info"]["location"]
    const mobile = dataCV["info"]["mobile"]
    const facebook = dataCV["info"]["facebook"]
    const github = dataCV["info"]["github"]

    const classes = useStyles();
    return (
        <Box
            sx={{
            width: 766,
            height: 530,
            padding: 2,
            borderRight: '1px solid grey',
            borderTop: '1px solid grey',
            '&:hover': {
                backgroundColor: '#e3f6f5',
                opacity: [0.9, 0.8, 0.7],
            },
            }}
        >
            <Typography variant="h6" color="inherit" component="div">
                Introduction
            </Typography>
            <Typography variant="body2" color="inherit" component="div">
                <ul>{listSummary}</ul>
            </Typography>
            <hr/>
            <Typography variant="h6" color="inherit" component="div">
                Personal Info
            </Typography>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={6}>
                    <Stack spacing={1.5} direction="column" justifyContent="flex-start" alignItems="stretch">
                        <div className={classes.div}><AccountBoxIcon color="primary"/>{name}</div>
                        <div className={classes.div}><CakeIcon color="primary"/>{dob}</div>
                        <div className={classes.div}><LocationOnIcon color="primary" />{location}</div>
                        <div className={classes.div}><PhoneIphoneIcon color="primary"/>{mobile}</div>
                        <div className={classes.div}><EmailIcon sx={{ color: red[400] }}/>{email}</div>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={1.5} direction="column" justifyContent="flex-start" alignItems="stretch">
                        <div className={classes.div}><LanguageIcon color="primary"/>{mainLanguage}</div>
                        <div className={classes.div}><LanguageIcon color="primary"/>{secondLanguage}</div>
                        <div className={classes.div}><FacebookIcon color="primary"/><a href={facebook} className={classes.link}>{facebook}</a></div>
                        <div className={classes.div}><GitHubIcon/><a href={github} className={classes.link}>{github}</a></div>
                    </Stack>    
                </Grid>
            </Grid>
            <hr/>
            <Typography variant="h6" color="inherit" component="div">
                Hobbies
            </Typography>
                <Stack spacing={1.5} direction="column" justifyContent="flex-start" alignItems="stretch">
                    <div className={classes.div}><PoolIcon color="primary"/>{hobies[0]}</div>
                    <div className={classes.div}><BookIcon color="primary"/>{hobies[1]}</div>
                </Stack>
            <hr/>
        </Box>
    )
}
const useStyles = makeStyles(theme => ({
    div:{
        display: 'flex',
    },
    link:{
        textDecoration: "none",
        color: "black",
        "&:hover": {
            color: "red",
            borderBottom: "1px solid white",
        },
    }

}))
