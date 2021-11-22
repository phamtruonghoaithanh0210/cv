import React from 'react'
import {Box, Typography,useMediaQuery, Link, Button } from '@mui/material'
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineSeparator } from "@mui/lab"
import dataCV from "../data/cv.json"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SendIcon from '@mui/icons-material/Send';
import {makeStyles, withStyles, useTheme} from "@mui/styles" 

const TimelineItem = withStyles({
    missingOppositeContent: {
    "&:before": {
        display: "none",
    }
    }
})(MuiTimelineItem);


function Experience() {
    const data= dataCV["history"]
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const History = data.map((t)=>{
        const ListResponsibilities = t["projects"][0]["responsibilities"].map((idx) =>{
            return(
                <Typography variant="body2" color="inherit" component="div" paddingLeft="15px">
                    {idx}
                </Typography>
            )
        })
        return(
            <Timeline position="right" className={classes.typo}>
                <TimelineItem  >
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <LaptopMacIcon color="primary" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className={classes.timeline}>
                        <Typography variant="h6" style={{color:"#0B8790"}} component="div">
                            {t.time}
                        </Typography>
                        <Typography variant="h6" style={{color:"#190033"}} component="div" >
                            {t["projects"][0].name}
                        </Typography>
                        <Typography variant="body1" style={{color:"#d9376e"}} component="div" >
                            Skills:
                        </Typography>
                        <Typography variant="body1" color="inherit" component="div" paddingLeft="15px">
                            {t.skills}
                        </Typography>
                        <Typography variant="body1" style={{color:"#d9376e"}} component="div" >
                            Topic:
                        </Typography>
                        <Typography variant="body1" color="inherit" component="div" paddingLeft="15px" >
                            {t["projects"][0].description}
                        </Typography>
                        <Typography variant="body1" style={{color:"#d9376e"}} component="div" >
                            Responsibilities:
                        </Typography>
                        {ListResponsibilities}
                        <Typography variant="body1" color="inherit" component="span" style={{color:"#d9376e"}} >
                            Git:
                        </Typography>
                        <Typography variant="body1" color="inherit" component="span" >
                            {isMobile ? (
                                <Link href={t["projects"][0].git} underline="none" color="inherit"
                            className={classes.link}>Link github of projects</Link>
                            ) : (
                            <Link href={t["projects"][0].git} underline="none" color="inherit"
                            className={classes.link}>{t["projects"][0].git}</Link>
                            )}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>            
        )
    })
    return (
        <Box className={classes.box}>
            <Typography variant="h6" color="inherit" component="div">
                Experience
            </Typography>
            {History}
            <hr className={classes.hr}/>
        </Box>
    )
}
const useStyles = makeStyles(theme => ({
    typo:{
        width: "100%",
        height: "100%",
        [theme.breakpoints.down("md")]:{
            padding: "0",
        }
    },
    link:{
        paddingLeft :"5px",
        "&:hover": {
            color: "red",
            borderBottom: "1px solid white",
        },
        [theme.breakpoints.down("md")]:{
            paddingRight:"5px",
        }
    },
    box:{
        width: "100%",
        height: "100%",
        padding: "2",
        borderRight: '1px solid grey',
        '&:hover': {
            backgroundColor: '#bae8e8',
            opacity: [1, 1, 1],
        },
    },
    timeline : {
        width:"100%",
        [theme.breakpoints.down("md")]:{
            width:"100%",
            padding:"0",
            margin:"0"
        }
    },
    hr:{
        marginBottom : "0",
    }
}))

export default Experience
