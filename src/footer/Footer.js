import React from 'react'
import {Typography, Box} from "@mui/material"

function Footer() {
    return (
    <Box
        sx={{
        width: "100%",
        padding: 2,
        marginTop: 5,
        backgroundColor: '#1976d2',
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
