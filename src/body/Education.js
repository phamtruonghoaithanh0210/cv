import React from 'react'
import {Typography,  Box, Stack} from "@mui/material"
import dataCV from "../data/cv.json"
import SchoolIcon from '@mui/icons-material/School';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {makeStyles} from "@mui/styles"

function Education() {
    const data = dataCV["education"][0]
    const Edu = data["achievements"].map((idx)=><li>{idx}</li>)
    const classes = useStyles();
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
        Education
        </Typography>
        <Stack spacing={1.5} direction="column" justifyContent="flex-start" alignItems="stretch">
                    <div className={classes.div}><SchoolIcon color="primary"/>{data.school}</div>
                    <div className={classes.div}><LaptopChromebookIcon color="primary"/>{data.major}</div>
                    <div className={classes.div}><ScheduleIcon color="primary"/>{data.time}</div>
                    <div className={classes.div}><CheckCircleOutlineIcon color="primary"/>achievements</div> 

        </Stack>
        <Typography variant="body2" color="inherit" component="div">
            <ul>{Edu}</ul>
        </Typography>
        <hr/>
    </Box>        
    )
}

const useStyles = makeStyles(theme => ({
    div:{
        display: 'flex',
    },
}))

export default Education
