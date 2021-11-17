import React from 'react'
import {Box, Typography, } from '@mui/material'
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineSeparator } from "@mui/lab"
import dataCV from "../data/cv.json"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import {makeStyles, withStyles} from "@mui/styles" 

const TimelineItem = withStyles({
    missingOppositeContent: {
    "&:before": {
        display: "none"
    }
    }
})(MuiTimelineItem);


function Experience() {
    const data= dataCV["history"]
    const classes = useStyles();
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
                    <TimelineContent >
                        <Typography variant="h6" style={{color:"#0B8790"}} component="div">
                            {t.time}
                        </Typography>
                        <Typography variant="h6" style={{color:"#190033"}} component="div">
                            {t["projects"][0].name}
                        </Typography>
                        <Typography variant="body1" style={{color:"#d9376e"}} component="div">
                            Skills:
                        </Typography>
                        <Typography variant="body1" color="inherit" component="div" paddingLeft="15px">
                            {t.skills}
                        </Typography>
                        <Typography variant="body1" style={{color:"#d9376e"}} component="div">
                            Topic:
                        </Typography>
                        <Typography variant="body1" color="inherit" component="div" paddingLeft="15px">
                            {t["projects"][0].description}
                        </Typography>
                        <Typography variant="body1" style={{color:"#d9376e"}} component="div">
                            Responsibilities:
                        </Typography>
                        {ListResponsibilities}
                        <Typography variant="body1" color="inherit" component="span" style={{color:"#d9376e"}}>
                            Git:
                        </Typography>
                        <Typography variant="body1" color="inherit" component="span" >
                            <a href={t["projects"][0].git} className={classes.link}> {t["projects"][0].git}</a>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>            
        )
    })
    return (
        <Box
            sx={{
            width: 766,
            height: 1600,
            padding: 2,
            borderRight: '1px solid grey',
            '&:hover': {
                backgroundColor: '#bae8e8',
                opacity: [0.9, 0.8, 0.7],
            },
            }}
        >
            <Typography variant="h6" color="inherit" component="div">
                Experience
            </Typography>
            {History}
            <hr/>
        </Box>
    )
}
const useStyles = makeStyles(theme => ({
    typo:{
        width: "800px",
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

export default Experience
