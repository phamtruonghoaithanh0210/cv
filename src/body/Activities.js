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

    const data = dataCV["activities"]
    const Activity = data.map((a)=> {
        return(
            <Timeline position="right">
                <TimelineItem  >
                    <TimelineSeparator>
                            <TimelineDot variant="outlined">
                                <FavoriteBorderIcon className={classes.colorIcon} />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                        <Typography variant="h6" style={{color:"#ef6c00"}} component="div">
                            {a.time}
                        </Typography>
                        <Typography variant="body1"  style={{color:"#e65100"}} component="span">
                            Name:
                        </Typography>
                        <Typography variant="body1" component="span" paddingLeft="5px" className={classes.typoColor}>
                            {a.name}
                        </Typography>
                        <Typography variant="body1" color="inherit" component="div" >
                        </Typography>
                        <Typography variant="body1" style={{color:"#e65100"}} component="span">
                            Role: 
                        </Typography>
                        <Typography variant="body1" component="span" paddingLeft="5px" className={classes.typoColor}>
                            {a.role}
                        </Typography>
                        <Typography variant="body1" color="inherit" component="div" >
                        </Typography>
                        <Typography variant="body1"  style={{color:"#e65100"}} component="span">
                            Description:
                        </Typography>
                        <Typography variant="body1" component="span" paddingLeft="5px" className={classes.typoColor}>
                            {a.description}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>            
        )
    })
    return (
        <Box className={classes.box}>
        <Typography variant="h5"  component="div" className={classes.typoStyle}>
            Activities
        </Typography>
        {Activity}  
    </Box>
    )

}
const useStyles = makeStyles(theme => ({
    box:{
        width: "100%",
        height: "100%",
        padding: "15px",
        borderRight: '1px solid grey',
        borderTop: '1px solid grey',
        borderBottom: '1px solid grey',
        backgroundColor: theme.palette.divider,
        '&:hover': {
            backgroundColor: theme.palette.divider,
            opacity: [1, 1, 1],
        }
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
export default Activities
