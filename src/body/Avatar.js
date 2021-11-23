import React from 'react'
import {Card, CardActionArea, CardMedia, CardContent, Typography, Chip} from "@mui/material"
import Logo from "../static/images/anhcv.png"
import CodeIcon from '@mui/icons-material/Code';
import {makeStyles} from "@mui/styles"

export default function Avatar() {
    const classes = useStyles();
    return (
        <Card className={classes.card} >
            <CardActionArea >
                <CardMedia
                component="img"
                // height="360"
                image={Logo}
                alt="anh của thanh"
                className={classes.cardMedia}/>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Pham Truong Hoai Thanh
                    </Typography>
                    <Typography variant="body1" color="inherit" component="div" style={{paddingBottom:"5px"}}>
                        Fontend Developer
                    </Typography>
                    <Chip icon={<CodeIcon />} label="JavaScript" variant="outlined" />
                    <Chip icon={<CodeIcon />} label="ReactJS" variant="outlined" />
                    <Chip icon={<CodeIcon />} label="Django" variant="outlined" />
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: "445px",
        [theme.breakpoints.down("md")]:{
            width: "100%",
        }
    },
    cardMedia:{
        height:"360px",
        [theme.breakpoints.down("md")]:{
            height:"360px"
        }
    }
}))
