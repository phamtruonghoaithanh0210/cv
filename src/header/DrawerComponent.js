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
                            <Link to="/education" className={classes.link}>Education</Link>  
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={()=> setOpenDrawer(false)}> 
                        <ListItemText>
                            <Link to="/experience" className={classes.link}>Experience</Link>  
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={()=> setOpenDrawer(false)}> 
                        <ListItemText>
                            <Link to="/profile" className={classes.link}>Profile</Link>  
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={()=> setOpenDrawer(false)}> 
                        <ListItemText>
                            <Link to="/activity" className={classes.link}>Activity</Link>  
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

const useStyles = makeStyles( (theme) => ({
    link: {
        textDecoration: "none",
        color: theme.palette.text.primary,
        fontSize : "20px",
        "&:hover": {
            color: theme.palette.primary.main,
            borderBottom: "1px solid #c51162",
        },
    },
    icon : {
        color : "red"
    },
}))
