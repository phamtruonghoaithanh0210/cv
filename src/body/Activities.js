import React from 'react'
import {Typography, Box} from "@mui/material"
import dataCV from "../data/cv.json"
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineSeparator } from "@mui/lab"
import { withStyles} from "@mui/styles" 

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
        height: 280,
        padding: 2,
        borderRight: '1px solid grey',
        '&:hover': {
            backgroundColor: '#bae8e8',
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
                    <TimelineDot variant="outlined" color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent >
                    <Typography variant="h6" color="inherit" component="div">
                        {a.time}
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        Name:
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        {a.name}
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        Role:
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        {a.role}
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        Description:
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        {a.description}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>            
    )
})
export default Activities
