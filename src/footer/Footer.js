import React from 'react'
import {Typography, Box} from "@mui/material"
import {useTheme} from "@mui/styles"

function Footer() {
    const theme = useTheme();
    return (
    <Box
        sx={{
        width: "100%",
        padding: 2,
        marginTop: 5,
        backgroundColor: theme.palette.primary.main,
        borderRight: '1px solid grey',
        borderBottom: '1px solid grey',
        textAlign:"center",
        }}
    >
        <Typography variant="body2" component="span" style={{color:"white"}}>
            @2021 | Pham Truong Hoai Thanh
        </Typography>
    </Box>
    )
}

export default Footer
