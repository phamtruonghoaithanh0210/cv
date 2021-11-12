import React from 'react'
import {AppBar, CssBaseline, Toolbar, Typography, IconButton,useMediaQuery} from "@mui/material"
import {makeStyles, useTheme} from "@mui/styles"
import {Link} from "react-router-dom"
import DrawerComponent from "./DrawerComponent"

export default function Header() {
    
    const theme = useTheme();
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <AppBar  position="static">
            <CssBaseline/>
            <Toolbar variant="dense">
                <Typography variant="h6" md={4} color="inherit" component="div" className={classes.logo}>
                Hoai Thanh
                </Typography>
                {isMobile ? (<DrawerComponent/>) : (
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>Home</Link>
                        <Link to="/skill" className={classes.link}>SKills</Link>
                        <Link to="/experiences" className={classes.link}>Experiences</Link>
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
    link:{
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(10),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    }
}))