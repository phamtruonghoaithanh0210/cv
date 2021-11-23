import React from 'react'
import {AppBar, CssBaseline, Toolbar, Typography,useMediaQuery} from "@mui/material"
import {makeStyles, useTheme} from "@mui/styles"
import {Link} from "react-router-dom"
import DrawerComponent from "./DrawerComponent"
import { red } from '@mui/material/colors'

export default function Header() {
    
    const theme = useTheme();
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <AppBar  position="static" >
            <CssBaseline/>
            <Toolbar variant="dense" className={classes.nav}>
                <Typography variant="h6" md={4} color="inherit" component="div" className={classes.logo}>
                    <Link to="/" className={classes.logoLink}>Hoai Thanh</Link>
                </Typography>
                {isMobile ? (<DrawerComponent/>) : (
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>Home</Link>
                        <Link to="/education" className={classes.link}>Education</Link>
                        <Link to="/experience" className={classes.link}>Experience</Link>
                        <Link to="/profile" className={classes.link}>Profile</Link>
                        <Link to="/activity" className={classes.link}>Activity</Link>
                        <Link to="/relax" className={classes.link}>Relax</Link> 
                    </div>
                    )
                }
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
        color: "white",
    },
    link:{
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(10),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
    nav:{
        width: "100%",
        [theme.breakpoints.down("md")]:{
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            color: red,
        }
    }
}))
