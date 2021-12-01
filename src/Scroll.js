import { IconButton } from '@mui/material'
import React, {useState, useEffect} from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {makeStyles, useTheme} from "@mui/styles" 

function Scroll() {
    const theme = useTheme();
    const classes = useStyles();
    const [show, setShow] = useState(false)

    const handleScroll = () => {
        if (window.pageYOffset > 100)
            setShow(true)
        else {
            setShow(false)
        }
    }
    useEffect(() => {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
    }, [])   
    const handleClick = () => {
        window['scrollTo']({top: 0 , behavior: 'smooth'})
    }
    return (
        <>
        {show &&
            <IconButton onClick={handleClick}
                size= "large"
                style={{position:"fixed", backgroundColor: theme.palette.primary.main}}
                className={classes.iconButton}
                >
                <ExpandLessIcon />
            </IconButton>
        }
        </>
    )
}
const useStyles = makeStyles(theme => ({
    iconButton: {
        position : 'absolute',
        bottom: "12px",
        right: "18px"
    },
}))
export default Scroll
