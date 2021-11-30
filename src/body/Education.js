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
        <Typography variant="h5" component="div"  className={classes.typoStyle}>
        Education
        </Typography>
        <Stack spacing={1.5} direction="column" justifyContent="flex-start" alignItems="stretch" paddingLeft="15px">
                    <div className={classes.div}><SchoolIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{data.school}</Typography></div>
                    <div className={classes.div}><LaptopChromebookIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{data.major}</Typography></div>
                    <div className={classes.div}><ScheduleIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>{data.time}</Typography></div>
                    <div className={classes.div}><CheckCircleOutlineIcon className={classes.colorIcon}/><Typography variant="body1" component="span" paddingLeft="7px" className={classes.typoColor}>Achievements</Typography></div> 

        </Stack>
        <Typography variant="body1" component="div" className={classes.typoColor}>
            <ul>{Edu}</ul>
        </Typography>
        {/* <hr className={classes.hr}/> */}
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
        padding: "15px",
        borderRight: '1px solid grey',
        borderTop: '1px solid grey',
        backgroundColor: theme.palette.divider,
        '&:hover': {
            backgroundColor: theme.palette.divider,
            opacity: [1, 1, 1],
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

export default Education
