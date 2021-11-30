import React from 'react'
import {Box, Typography, Grid, Stack, useMediaQuery} from '@mui/material'
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
import { red, grey } from '@mui/material/colors';
import {makeStyles, useTheme} from "@mui/styles"

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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <Box className={classes.box}>
            <Typography variant="h5" className={classes.typoColor} component="div" >
                Introduction    
            </Typography>
            <Typography variant="body1" className={classes.typoColor} component="div">
                <ul>{listSummary}</ul>
            </Typography>
            <hr/>
            <Typography variant="h5"  component="div" className={classes.typoStyle}>
                Personal Info
            </Typography>
                {isMobile ? (
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12}>
                            <Stack spacing={1.5} direction="column" justifyContent="flex-start" alignItems="stretch" paddingLeft="15px">
                                <div className={classes.div}><AccountBoxIcon className={classes.colorIcon} /><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{name}</Typography></div>
                                <div className={classes.div}><CakeIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{dob}</Typography></div>
                                <div className={classes.div}><LocationOnIcon className={classes.colorIcon} /><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{location}</Typography></div>
                                <div className={classes.div}><PhoneIphoneIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{mobile}</Typography></div>
                                <div className={classes.div}><EmailIcon sx={{ color: red[400] }}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{email}</Typography></div>
                                <div className={classes.div}><LanguageIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{mainLanguage}</Typography></div>
                                <div className={classes.div}><LanguageIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{secondLanguage}</Typography></div>
                                <div className={classes.div}><FacebookIcon className={classes.colorIcon}/><a href={facebook} className={classes.link} >{facebook}</a></div>
                                <div className={classes.div}><GitHubIcon sx={{ color: grey[900] }}/><a href={github} className={classes.link}>{github}</a></div>
                            </Stack>    
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={6}>
                            <Stack spacing={1.5} direction="column" justifyContent="flex-start" alignItems="stretch" paddingLeft="15px">
                                <div className={classes.div}><AccountBoxIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{name}</Typography></div>
                                <div className={classes.div}><CakeIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{dob}</Typography></div>
                                <div className={classes.div}><LocationOnIcon className={classes.colorIcon} /><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{location}</Typography></div>
                                <div className={classes.div}><PhoneIphoneIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{mobile}</Typography></div>
                                <div className={classes.div}><EmailIcon sx={{ color: red[400] }}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{email}</Typography></div>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1.5} direction="column" justifyContent="flex-start" alignItems="stretch">
                                <div className={classes.div}><LanguageIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{mainLanguage}</Typography></div>
                                <div className={classes.div}><LanguageIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{secondLanguage}</Typography></div>
                                <div className={classes.div}><FacebookIcon className={classes.colorIcon}/><a href={facebook} className={classes.link} >{facebook}</a></div>
                                <div className={classes.div}><GitHubIcon sx={{ color: grey[900] }}/><a href={github} className={classes.link}>{github}</a></div>
                            </Stack>    
                        </Grid>
                    </Grid>
                )}
            
            <hr/>
            <Typography variant="h5"  component="div" className={classes.typoStyle}>
                Hobbies
            </Typography>
                <Stack spacing={1.5} direction="column" justifyContent="flex-start" alignItems="stretch" paddingLeft="15px">
                    <div className={classes.div}><PoolIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{hobies[0]}</Typography></div>
                    <div className={classes.div}><BookIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{hobies[1]}</Typography></div>
                </Stack>
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
        paddingLeft: "7px",
        "&:hover": {
            color: "#f25042",
            borderBottom: "1px solid white",
        },
    },
    box:{
            width: "100%",
            height: "100%",
            padding: "15px",
            borderRight: '1px solid grey',
            borderTop: '1px solid grey',
            backgroundColor: theme.palette.divider,
            '&:hover': {
                backgroundColor: theme.palette.divider,
                opacity: [0.2, 0.8, 0.7],
            }
    },
    hr:{
        marginBottom : "0",
    },
    colorIcon: {
        color: theme.palette.mauIcon
    },
    typoStyle : {
        paddingBottom: "12px",
        color : theme.palette.text.secondary
    }
    ,
    typoColor: {
        color : theme.palette.text.secondary
    },

}))
