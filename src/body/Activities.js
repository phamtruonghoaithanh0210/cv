import React from 'react'
import {Typography, Box} from "@mui/material"
import dataCV from "../data/cv.json"
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineSeparator } from "@mui/lab"
import { withStyles, makeStyles} from "@mui/styles" 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const TimelineItem = withStyles({
    missingOppositeContent: {
    "&:before": {
        display: "none"
    }
    }
})(MuiTimelineItem);

function Activities() {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
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
                    <Typography variant="body1"  style={{color:"#d9376e"}} component="span">
                        Name:
                    </Typography>
                    <Typography variant="body1" color="inherit" component="span" paddingLeft="5px" >
                        {a.name}
                    </Typography>
                    <Typography variant="body1" color="inherit" component="div" >
                    </Typography>
                    <Typography variant="body1" style={{color:"#d9376e"}} component="span">
                        Role: 
                    </Typography>
                    <Typography variant="body1" color="inherit" component="span" paddingLeft="5px">
                        {a.role}
                    </Typography>
                    <Typography variant="body1"  style={{color:"#d9376e"}} component="div">
                        Description:
                    </Typography>
                    <Typography variant="body1" color="inherit" component="div" paddingLeft="5px">
                        {a.description}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>            
    )
})
const useStyles = makeStyles(theme => ({
    box:{
        width: "100%",
        height: "100%",
        padding: "2",
        borderRight: '1px solid grey',
        borderBottom: '1px solid grey',
        '&:hover': {
            backgroundColor: '#9AD4DC',
            opacity: [1, 1, 1],
        }
    }

}))
export default Activities
