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
        
        <Box className={classes.box}>
        <Typography variant="h6" color="inherit" component="div">
        Education
        </Typography>
        <Stack spacing={1.5} direction="column" justifyContent="flex-start" alignItems="stretch" paddingLeft="15px">
                    <div className={classes.div}><SchoolIcon color="primary"/><Typography variant="body1" component="span" paddingLeft="7px">{data.school}</Typography></div>
                    <div className={classes.div}><LaptopChromebookIcon color="primary"/><Typography variant="body1" component="span" paddingLeft="7px">{data.major}</Typography></div>
                    <div className={classes.div}><ScheduleIcon color="primary"/><Typography variant="body1" component="span" paddingLeft="7px">{data.time}</Typography></div>
                    <div className={classes.div}><CheckCircleOutlineIcon color="primary"/><Typography variant="body1" component="span" paddingLeft="7px">Achievements</Typography></div> 

        </Stack>
        <Typography variant="body1" color="inherit" component="div">
            <ul>{Edu}</ul>
        </Typography>
        <hr className={classes.hr}/>
    </Box>        
    )
}

const useStyles = makeStyles(theme => ({
    div:{
        display: 'flex',
    },
    box:{
        width: "100%",
        height: "100%",
        padding: "2",
        borderRight: '1px solid grey',
        borderTop: '1px solid grey',
        backgroundColor: theme.palette.divider,
        '&:hover': {
            backgroundColor: '#e3f6f5',
            opacity: [1, 1, 1],
        }
    },
    hr:{
        marginBottom : "0",
    }

}))

export default Education
