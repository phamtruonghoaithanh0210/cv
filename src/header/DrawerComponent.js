import React, {useState} from 'react'
import {Drawer, IconButton, List, ListItem, ListItemText} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles"
import { Link } from 'react-router-dom'

export default function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <Drawer open={openDrawer} onClose={ () => setOpenDrawer(false)} >
                <List>
                    <ListItem onClick={()=> setOpenDrawer(false)}> 
                        <ListItemText>
                            <Link to="/"  className={classes.link}>Home</Link>    
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={()=> setOpenDrawer(false)}> 
                        <ListItemText>
                            <Link to="/relax" className={classes.link}>Relax</Link>  
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer> 
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                <MenuIcon />
            </IconButton> 
        </>
    )
}

const useStyles = makeStyles( () => ({
    link: {
        textDecoration: "none",
        color: "#8bd3dd",
        fontSize : "20px",
        "&:hover": {
            color: "Blue",
            borderBottom: "1px solid white",
        },
    },
    icon : {
        color : "red"
    }
}))
