import React from 'react'
import {Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material"
import Logo from "../static/images/anhcv.png"

export default function Avatar() {
    return (
        <Card sx={{ maxWidth: 445}} >
            <CardActionArea >
                <CardMedia
                component="img"
                height="360"
                image={Logo}
                alt="anh của thanh"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Pham Truong Hoai Thanh
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Fontend Developer
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
