import React from 'react'
import {Box, Typography,useMediaQuery, Link } from '@mui/material'
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineSeparator } from "@mui/lab"
import dataCV from "../data/cv.json"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
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
                <Typography variant="body1" className={classes.typoColor} component="div" paddingLeft="15px">
                    {idx}
                </Typography>
            )
        })
        return(
            <Timeline position="right" className={classes.typo}>
                <TimelineItem  >
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <LaptopMacIcon className={classes.colorIcon} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className={classes.timeline}>
                        <Typography variant="h6" style={{color:"#ef6c00"}} component="div">
                            {t.time}
                        </Typography>
                        <Typography variant="h5" style={{color:"#1d3c45"}} component="div" >
                            {t["projects"][0].name}
                        </Typography>
                        <Typography variant="body1" style={{color:"#e65100"}} component="div" >
                            Skills:
                        </Typography>
                        <Typography variant="body1" component="div" paddingLeft="15px" className={classes.typoColor}>
                            {t.skills}
                        </Typography>
                        <Typography variant="body1" style={{color:"#e65100"}} component="div" >
                            Topic:
                        </Typography>
                        <Typography variant="body1" component="div" paddingLeft="15px" className={classes.typoColor}>
                            {t["projects"][0].description}
                        </Typography>
                        <Typography variant="body1" style={{color:"#e65100"}} component="div" >
                            Responsibilities:
                        </Typography>
                        {ListResponsibilities}
                        <Typography variant="body1"  component="span" style={{color:"#e65100"}} >
                            Git:
                        </Typography>
                        <Typography variant="body1" component="span" className={classes.typoColor}>
                            {isMobile ? (
                                <Link href={t["projects"][0].git} underline="none" color="error"
                            className={classes.link}>Link github of project</Link>
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
            <Typography variant="h5" component="div" className={classes.typoStyle}>
                Experiences
            </Typography>
            {History}
            {/* <hr className={classes.hr}/> */}
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
        padding: "15px",
        borderRight: '1px solid grey',
        borderTop: '1px solid grey',
        backgroundColor: theme.palette.divider,
        '&:hover': {
            backgroundColor: theme.palette.divider,
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
    },
    colorIcon: {
        color: theme.palette.mauIcon
    },
    typoStyle : {
        paddingBottom: "12px",
        color : theme.palette.text.secondary
    },
    typoColor: {
        color : theme.palette.text.secondary
    },
}))

export default Experience
