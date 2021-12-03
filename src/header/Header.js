import React from 'react'
import {AppBar, CssBaseline, Toolbar, Typography,useMediaQuery} from "@mui/material"
import {makeStyles, useTheme} from "@mui/styles"
import {Link} from "react-router-dom"
import DrawerComponent from "./DrawerComponent"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors'

export default function Header(props) {
    const theme = useTheme();
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    function changeTheme(){
        if(props.theme === 'light'){
            props.setTheme("dark")
        }else{
            props.setTheme("light")
        }
    }

    return (
        <AppBar  position="static" >
            <CssBaseline/>
            <Toolbar variant="dense" className={classes.nav} >
                <Typography variant="h6" md={4}  component="div" className={classes.logo}>
                    <Link to="/" className={classes.logoLink}>Hoai Thanh</Link>
                </Typography>
                {isMobile ? (<DrawerComponent/>) : (
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>Home</Link>
                        <Link to="/education" className={classes.link}>Education</Link>
                        <Link to="/experience" className={classes.link}>Experience</Link>
                        <Link to="/profile" className={classes.link}>Profile</Link>
                        <Link to="/activity" className={classes.link}>Activity</Link>
                    </div>
                    )
                }
                <IconButton onClick={changeTheme} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles(theme => ({
    navlinks: {
        marginLeft: theme.spacing(15),
        marginRight: theme.spacing(30),
        display: "flex",    
    },
    logo : {
        textAlign: "center",
        flexGrow : 1,
        cursor: "pointer",
    },
    logoLink : {
        textDecoration: "none",
        color: theme.palette.text.primary,
    },
    link:{
        textDecoration: "none",
        color: theme.palette.text.primary,
        fontSize: "20px",
        marginLeft: theme.spacing(10),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
    nav:{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down("md")]:{
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            color: red,
        }
    }
}))
