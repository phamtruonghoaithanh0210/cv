import React from 'react'
import {Typography, Box} from "@mui/material"
import dataCV from "../data/cv.json"
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineSeparator } from "@mui/lab"
import { withStyles} from "@mui/styles" 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const TimelineItem = withStyles({
    missingOppositeContent: {
    "&:before": {
        display: "none"
    }
    }
})(MuiTimelineItem);

function Activities() {
    return (
        <Box
        sx={{
        width: 766,
        height: 550,
        padding: 2,
        borderRight: '1px solid grey',
        borderBottom: '1px solid grey',
        '&:hover': {
            backgroundColor: '#abd1c6',
            opacity: [0.9, 0.8, 0.7],
        },
        }}
    >
        <Typography variant="h6" color="inherit" component="div">
            Activities
        </Typography>
        {Activity}  
    </Box>
    )
}
const data = dataCV["activities"]
const Activity = data.map((a)=> {
    return(
        <Timeline position="right">
            <TimelineItem  >
                <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <FavoriteBorderIcon style={{color:"red"}}  />
                        </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent >
                    <Typography variant="h6" style={{color:"#0B8790"}} component="div">
                        {a.time}
                    </Typography>
                    <Typography variant="body2"  style={{color:"#d9376e"}} component="span">
                        Name:
                    </Typography>
                    <Typography variant="body2" color="inherit" component="span" paddingLeft="5px" >
                        {a.name}
                    </Typography>
                    <Typography variant="body2" color="inherit" component="div" >
                    </Typography>
                    <Typography variant="body2" style={{color:"#d9376e"}} component="span">
                        Role: 
                    </Typography>
                    <Typography variant="body2" color="inherit" component="span" paddingLeft="5px">
                        {a.role}
                    </Typography>
                    <Typography variant="body2"  style={{color:"#d9376e"}} component="div">
                        Description:
                    </Typography>
                    <Typography variant="body2" color="inherit" component="div" paddingLeft="5px">
                        {a.description}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>            
    )
})
export default Activities
